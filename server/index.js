const { SecJS } = require('@secjs/http')
const { createLogger, format, transports } = require('winston')

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json(),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs.log' })
  ],
});

const server = new SecJS()

const body = JSON.stringify({ level: 'info', type: 'log', message: "Hello FluentD!" })

setInterval(() => logger.log(JSON.parse(body)), 10000)

server.get('/', (ctx) => {
  ctx.response.status(200).json({
    path: ctx.request.url,
    statusCode: 200,
    data: JSON.parse(body)
  })
})

server.listen(4040, () => console.log('Server running'))
