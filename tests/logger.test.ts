import { Logger, LoggerConfig } from "../src/logger"

test('create new Logger', () => {
    const logger = new Logger();
    expect(logger).toBeTruthy();
    expect(logger.config).toBeTruthy();
})

test('create new Logger with config', () => {
    const config = new LoggerConfig();
    const logger = new Logger(config);
    expect(logger.config).toEqual(config);
})
