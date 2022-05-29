import { LogFormatter, StandardLogFormatter } from './formatter';
import { FsLogWriter, LogWriter, StdoutLogWriter } from './writer';

export class Logger {
    /**
     * Specify configuration for this logger. 
     */
    config: LoggerConfig;

    /**
     * Specify how log messages should be formatted.
     */
    formatter: LogFormatter;

    /**
     * Specify where log messages should be written to.
     * 
     * Most use-cases do not require you to ever change this!
     */
    writer: LogWriter;

    constructor(config?: LoggerConfig, args?: {
        formatter?: LogFormatter,
        writer?: LogWriter
    }) {
        this.config = config || {
            output: 'STDOUT'
        };
        this.formatter = (args && args.formatter) || new StandardLogFormatter();
        this.writer = (args && args.writer) || (this.config.output === 'STDOUT' ? new StdoutLogWriter() : new FsLogWriter(this.config.output)); 
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
     * The (writeable) filepath to which logs should be written.
     * 
     * By default, set to STDOUT.
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





