import { Logger } from "../lib/cjs/index.js"

test('create new Logger', () => {
    const logger = new Logger();
    expect(logger).toBeTruthy();
})
