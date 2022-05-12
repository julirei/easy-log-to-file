const inquirer = require('inquirer');
module.exports = {
 askUsername: () => {
 const questions: object[] = [
 {
 name: 'username',
 type: 'input',
 message: 'Enter your username to get your report:',
 validate: function(value: any) {
 if (value.length) {
 return true;
 } else {
 return 'Please enter a username.';
 }
 }
 }
 ];
 return inquirer.prompt(questions);
 },
};