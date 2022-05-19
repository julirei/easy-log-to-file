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

    constructor(config?: LoggerConfig, args?: {
        formatter?: LogFormatter,
        writer?: LogWriter
    }) {
        this.config = config || {
            output: 'logger.log'
        };
        this.formatter = (args && args.formatter) || new StandardLogFormatter();
        this.writer = (args && args.writer) || new FsLogWriter(this.config.output); 
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

    /**
     * Logs a warning message.
     */
     warning(message: string) {
        const logMessage = this.formatter.format(
            LogLevel.warning, 
            new Date(), 
            message
        );
        this.writer.write(logMessage);
    }

    /**
     * Logs an error message.
     */
     error(message: string) {
        const logMessage = this.formatter.format(
            LogLevel.error, 
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
     * will be written (e.g., ./logs/dev.log).
     * 
     * Important: The specified path must exist such that the log file 
     * can be created inside this folder.
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





