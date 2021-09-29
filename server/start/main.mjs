import { SecJS } from '@secjs/http'
import { LogController } from '../app/Http/Controllers/LogController.mjs'

const server = new SecJS()
const logController = new LogController()

server.get('/', logController.get)
server.post('/', logController.post)

server.listen(4040, () => console.log('SecJS server running on port 4040'))
