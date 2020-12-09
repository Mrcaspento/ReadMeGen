const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const userQuestions = [
{
    type: 'input',
    message: 'What is the title of the project?',
    name: 'title'
},{
    type: 'input',
    message: 'Provide a brief description of the project.',
    name: 'description'
},{
    type: 'input',
    message: 'Provide steps of installing the program.',
    name: 'instructions'
},{
    type: 'input',
    message: 'What is the project used for?',
    name: 'usage'
},{
    type: 'input',
    message: 'Describe how to test your app.',
    name: 'test'
},{
    type: 'list',
    message: 'Which licence would you include',
    name: 'license',
    choices: ["MIT","GNU"]
},{
    type: 'input',
    message: 'What is your github username?',
    name: 'gitHubName'
},{
    type: 'input',
    message: 'What is your email?',
    name: 'email'
},{
    type: 'input',
    message: 'Who helped if any to your app?',
    name: 'collabs'
}
];

// function to write README file
function writeToFile(uselessRobotWriter) {
    fs.writeFile('README.md',uselessRobotWriter, (err) =>
    err ? console.error(err) : console.log('ReadMe has been made NOOICE!')
    )};
// function to initialize program
function init() {
    inquirer.prompt(userQuestions).then(data => {
        const uselessRobotWriter = genMarkdown(data)
        writeToFile(uselessRobotWriter)
    })
}

// function call to initialize program
init();
