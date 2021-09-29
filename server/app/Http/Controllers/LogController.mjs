import { Logger } from '../../Utils/Logger.mjs'

export class LogController {
    get({ response }) {
        response.status(200).json({ message: 'It works!' })
    }

    post({ request, response }) {
        if (!request.body.type) request.body.type = 'log'
        if (!request.body.level) request.body.level = 'info'

        Logger.fileLog.log(request.body)

        response.status(200).json({ message: 'Data pushed to log file.' })
    }
}
