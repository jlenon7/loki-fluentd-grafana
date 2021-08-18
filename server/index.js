const { Sec } = require('@secjs/http')

const server = new Sec()

const body = JSON.stringify({ message: "Hello FluentD!" })

setInterval(() => console.log(body), 10000)

server.get('/', (ctx) => {
  ctx.response.writeHead(200, { 'Content-Type': 'application/json' })

  ctx.response.write(JSON.stringify({ 
    path: ctx.request.url, 
    statusCode: 200, 
    data: JSON.parse(body) 
  }))

  ctx.response.end()
})

server.listen(4040, () => console.log('Server running'))
