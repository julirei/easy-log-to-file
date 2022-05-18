import * as fs from 'fs';

export class Logger {

    /**
     * By default, a default configuration is used.
     */
    config: LoggerConfig;

    constructor(config?: LoggerConfig) {
        this.config = config || new LoggerConfig();
    }

    /**
     * Logs an info message.
     */
    info(message: string) {

    }
}

export class LoggerConfig {
    /**
     * The path to the folder into which the log files
     * will be written.
     */
    output: string;

    constructor(output: string = './logs') {
        this.output = output;
    }
}

export type LogLevel = 'info' | 'warning' | 'error';

export const formatLogMessage = (level: LogLevel, date: Date, message: string): string => {
    return `${logLevelSymbols[level]} <${date.toISOString()}> [${logLevelCaptions[level]}] ${message}`;
};

const logLevelSymbols = {
    'info': '.',
    'warning': '*',
    'error': '!'
};

const logLevelCaptions = {
    'info': 'INFO',
    'warning': 'WARNING',
    'error': 'ERROR'
};