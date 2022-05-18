import * as fs from 'fs';

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

    constructor(
        config?: LoggerConfig, 
        formatter?: LogFormatter,
        writer?: LogWriter
    ) {
        this.config = config || {
            output: './logs'
        };
        this.formatter = formatter || new StandardLogFormatter();
        this.writer = writer || new FsLogWriter(); 
    }

    /**
     * Logs an info message.
     */
    info(message: string) {

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
export type LogLevel = 'info' | 'warning' | 'error';
export const LOG_LEVEL_INFO: LogLevel = 'info'; 
export const LOG_LEVEL_WARNING: LogLevel = 'warning'; 
export const LOG_LEVEL_ERROR: LogLevel = 'error'; 

/**
 * Formats log messages.
 */
export interface LogFormatter {
    format(level: LogLevel, date: Date, message: string): string;
}

/**
 * Standard log format.
 */
export class StandardLogFormatter implements LogFormatter {
    static readonly logLevelSymbols = {
        'info': '.',
        'warning': '*',
        'error': '!'
    };
    
    static readonly logLevelCaptions = {
        'info': 'INFO',
        'warning': 'WARNING',
        'error': 'ERROR'
    };

    format(level: LogLevel, date: Date, message: string): string {
        return `${StandardLogFormatter.logLevelSymbols[level]} <${date.toISOString()}> [${StandardLogFormatter.logLevelCaptions[level]}] ${message}`;
    };
}

/**
 * Writes log messages to an output medium.
 */
export interface LogWriter {
    write(message: string): Promise<void>;
}

export class FsLogWriter implements LogWriter {
    write(message: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}

