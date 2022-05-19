"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const logger_1 = require("./logger");
Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return logger_1.Logger; } });
const logger = new logger_1.Logger({
    output: './logs/dev.log'
});
logger.info('I am an info message');
logger.warning('I am a warning message');
logger.error('I am an error message');
