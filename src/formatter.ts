import { LogLevel } from "./logger";

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
    format(level: LogLevel, date: Date, message: string): string {
        return `${this.logLevelSymbol(level)} <${date.toISOString()}> [${this.logLevelCaption(level)}] ${message}`;
    };

    private logLevelSymbol(level: LogLevel): string {
        switch(level) {
            case LogLevel.info:
                return '.';
            case LogLevel.warning:
                return '*';
            case LogLevel.error:
                return '!';
        }
    }

    private logLevelCaption(level: LogLevel): string {
        switch(level) {
            case LogLevel.info:
                return 'INF';
            case LogLevel.warning:
                return 'WRN';
            case LogLevel.error:
                return 'ERR';
        }
    }
}
