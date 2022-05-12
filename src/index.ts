/* import { randomName } from "./random-name";
export {randomName} */

const chalk = require('chalk'); // string styling
const clear = require('clear'); // clearing the window
const figlet = require('figlet'); // ASCII strings
const path = require('path'); // path module
const program = require('commander'); // command-line interface prompter
const cmdPrompt = require('./inquire');
clear();
console.log(
 chalk.red(
 figlet.textSync('my-cli', { horizontalLayout: 'full' })
 )
);
async function run(): Promise<void> {
 const username = await cmdPrompt.askUsername()
 console.log('Your username: ', username.username)
}
run()
