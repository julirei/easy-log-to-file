import { Logger, LOG_LEVEL_INFO, StandardLogFormatter } from "../src/logger"

test('create new Logger', () => {
    const logger = new Logger();
    expect(logger).toBeTruthy();
    expect(logger.config).toBeTruthy();
})

test('create new Logger with config', () => {
    const config = {
        output: './my_logs'
    };
    const logger = new Logger(config);
    expect(logger.config).toEqual(config);
})

test('format (standard) log message correctly', () => {
    const level = LOG_LEVEL_INFO;
    const date = new Date(2022, 4, 18);
    const message = 'Dummy Log Message';
    const expected = `. <${date.toISOString()}> [INFO] ${message}`;
    
    const formattedLogMessage = new StandardLogFormatter().format(level, date, message);
    expect(formattedLogMessage).toEqual(expected);
})
