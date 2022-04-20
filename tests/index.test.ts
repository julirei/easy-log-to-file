import { randomName } from "../lib/cjs/index.js"

test('randomName function', () => {
    expect(['Nick']).toContain(randomName())
})