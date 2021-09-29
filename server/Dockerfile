FROM node:12.21.0

WORKDIR /workspace

COPY package.json package-lock.json /workspace/

RUN npm install --silent --production

COPY . .

CMD ["node", "start/main.mjs"]
