import { Logger } from "./logger";
export { Logger };
const logger = new Logger({
    output: './logs/dev.log'
});
logger.info('I am an info message');
logger.warning('I am a warning message');
logger.error('I am an error message');
