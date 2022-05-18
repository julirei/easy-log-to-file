export class Logger {
    config: LoggerConfig;

    constructor(config?: LoggerConfig) {
        this.config = config || new LoggerConfig();
    }
}

export class LoggerConfig {
    output: string;
}