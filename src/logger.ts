import { LogFormatter, StandardLogFormatter } from './formatter';
import { FsLogWriter, LogWriter } from './writer';

export class Logger {
    /**
     * Specify configuration for this logger. 
     * 
     * By default, a default configuration is used.
     */
    config: LoggerConfig;

    /**
     * Specify how log messages should be formatted.
     */
    formatter: LogFormatter;

    /**
     * Specify where log messages should be written to.
     */
    writer: LogWriter;

    constructor(args: {
        config?: LoggerConfig, 
        formatter?: LogFormatter,
        writer?: LogWriter
    }) {
        this.config = args.config || {
            output: './logs/development.log'
        };
        this.formatter = args.formatter || new StandardLogFormatter();
        this.writer = args.writer || new FsLogWriter(this.config.output); 
    }

    /**
     * Logs an info message.
     */
    info(message: string) {
        const logMessage = this.formatter.format(
            LogLevel.info, 
            new Date(), 
            message
        );
        this.writer.write(logMessage);
    }
}

/**
 * Used to configure a Logger.
 */
export type LoggerConfig = {
    /**
     * The path to the folder into which the log files
     * will be written.
     */
    output: string;
}

/**
 * All available log levels.
 */
export enum LogLevel  {
    info, 
    warning, 
    error
}





