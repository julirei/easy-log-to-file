import { StandardLogFormatter } from "../src/formatter";
import { Logger, LogLevel } from "../src/logger"

let mockWriter;
let mockWriteFn;

beforeEach(() => {
    // Mock LogWriter.
    const MockWriterClass = jest.fn();
    mockWriteFn = jest.fn();
    MockWriterClass.mockImplementation(() => {
        return {
            write: mockWriteFn
        };
    });
    mockWriter = new MockWriterClass();
});

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
    const level = LogLevel.info;
    const date = new Date(2022, 4, 18);
    const message = 'Dummy Log Message';
    const expected = `. <${date.toISOString()}> [INFO] ${message}`;
    
    const formattedLogMessage = new StandardLogFormatter().format(level, date, message);
    expect(formattedLogMessage).toEqual(expected);
})

test('info() writes log message', () => {
    const logger = new Logger({
        'output': './logs/info.log'
    }, { writer: mockWriter});

    // Act.
    const message = 'Info Log Message';
    logger.info(message);
    
    // Expect.
    expect(mockWriteFn).toBeCalledTimes(1);
})

test('warning() writes log message', () => {
    const logger = new Logger({
        'output': './logs/warning.log'
    }, { writer: mockWriter});

    // Act.
    const message = 'Warning Log Message';
    logger.warning(message);
    
    // Expect.
    expect(mockWriteFn).toBeCalledTimes(1);
})

test('error() writes log message', () => {
    const logger = new Logger({
        'output': './logs/error.log'
    }, { writer: mockWriter});

    // Act.
    const message = 'Error Log Message';
    logger.error(message);
    
    // Expect.
    expect(mockWriteFn).toBeCalledTimes(1);
})
