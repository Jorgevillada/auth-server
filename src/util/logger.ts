import { createLogger, format, Logger as LoggerType, transports } from "winston";

export class Logger {

    public static log(level: string, message: string, ...meta: any[]) {
        Logger.logger.log(level, message, meta);
    }
    public static info(message: string, ...meta: any[]) {
        Logger.logger.info(message, meta);
    }
    public static debug(message: string, ...meta: any[]) {
        Logger.logger.debug(message, meta);
    }
    public static error(message: string, ...meta: any[]) {
        Logger.logger.error(message, meta);
    }

    private static logger: LoggerType = createLogger({
        format: format.simple(),
        level: "debug",
        transports: [
            new transports.Console(),
        ],
    });
}
