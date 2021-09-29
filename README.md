# loki-fluentd-grafana 🔎

> Monitoring Kubernetes cluster using LFG stack

[![GitHub followers](https://img.shields.io/github/followers/jlenon7.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/jlenon7?tab=followers)
[![GitHub stars](https://img.shields.io/github/stars/jlenon7/loki-fluentd-grafana.svg?style=social&label=Star&maxAge=2592000)](https://github.com/jlenon7/loki-fluentd-grafana/stargazers/)

<p>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jlenon7/loki-fluentd-grafana?style=for-the-badge&logo=appveyor">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jlenon7/loki-fluentd-grafana?style=for-the-badge&logo=appveyor">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge&logo=appveyor">
</p>

The intention behind this repository is to implement a stack to monitore pods inside a node of Kubernetes cluster using `LFG (Loki, FluentD and Grafana)` stack.

<img src=".github/monitoring.png" width="200px" align="right" hspace="30px" vspace="100px">

## Usage

> First create the FluentD DaemonSet inside Kubernetes and the service account, you can use [Kind](https://kind.sigs.k8s.io/) to create a local cluster.

```bash
kubectl create -f fluentd/configmap.yaml -f fluentd/daemonset.yaml -f fluentd/service-account.yaml
```

> Then run the NodeJS server that will keep logging every ten seconds to FluentD collect the data.

```bash
kubectl apply -f server/k8s
```

> FluentD will start collecting all the logs generated in the NodeJS server **stdout**. Run this command to see: 

```bash
kubectl logs -f -l name=fluentd-logging -n kube-system 
```

CONTINUE...

---

## License

Made with 🖤 by [jlenon7](https://github.com/jlenon7) :wave:
