import * as fs from 'fs';

export class Logger {

    /**
     * By default, a default configuration is used.
     */
    config: LoggerConfig;
    formatter: LogFormatter;

    constructor(config?: LoggerConfig) {
        this.config = config || {
            output: './logs'
        };
        this.formatter = new LogFormatter();
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
export class LogFormatter {
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
        return `${LogFormatter.logLevelSymbols[level]} <${date.toISOString()}> [${LogFormatter.logLevelCaptions[level]}] ${message}`;
    };
}