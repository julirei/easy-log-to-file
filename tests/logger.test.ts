import { formatLogMessage, Logger, LoggerConfig } from "../src/logger"

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

test('format log message correctly', () => {
    const level = 'info';
    const date = new Date(2022, 4, 18);
    const message = 'Dummy Log Message';
    const expected = `. <${date.toISOString()}> [INFO] ${message}`;
    
    const formattedLogMessage = formatLogMessage(level, date, message);
    expect(formattedLogMessage).toEqual(expected);
})
