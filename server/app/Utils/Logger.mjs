import pkg from 'winston';
const { createLogger, format, transports } = pkg;

export class Logger {
    static fileLog = createLogger({
        level: 'info',
        format: format.combine(
            format.timestamp(),
            format.json(),
        ),
        transports: [new transports.File({ filename: 'logs.log' })],
    })

    static consoleLog = createLogger({
        level: 'info',
        format: format.combine(
            format.timestamp(),
            format.json(),
        ),
        transports: [new transports.Console()],
    })
}

setInterval(() => Logger.consoleLog.log({ level: 'info', type: 'log', message: "Hello FluentD!" }), 10000)
