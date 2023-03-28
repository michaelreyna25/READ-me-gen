// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
var generateMarkdown = require('./assets/generateMarkdown');

// TODO: Create an array of questions for user input
const answers = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    }, 
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    }, 
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'install',
    }, 
    {
        type: 'input',
        message: 'How would I use this application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributing',
    }, 
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'tests',
    }, 
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0',],
        default: 'MIT',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
    ];
// Ask the title of the readme, description, installation instructions, usage information, contribution guidelines, and test instructions

// TODO: Create a function to write README file
function writeToFile(response) {
    fs.writeFile('./dist/README2.md', generateMarkdown(response), (err) =>
    err? console.log(err) : console.log('Success!')
    );
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(answers)
    .then(response => {
        module.exports = response
        writeToFile(response);
        console.log(generateMarkdown(response));
})}


// Function call to initialize app
init();
