import { Logger, LoggerConfig } from "./logger";

export {Logger, LoggerConfig}

const logger = new Logger({
    output: 'dev.log'
});
logger.info('I am an info message');
logger.warning('I am a warning message');
logger.error('I am an error message');