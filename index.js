const fs = require('fs');
const util = require("util");
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const writeFile = util.promisify(fs.writeFile);


function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the name of the project?",
            name: "title"
        },
        {
            type: 'input',
            message: 'Please provide a description of your project',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What is the installation process?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'How will this project be used?',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'What license is needed for this project?',
            choices: ['NPM', 'GNU', 'Apache'],
            name: 'license'
        },
        {
            type: 'input',
            message: 'What is the test process for this project?',
            name: 'test'
        },
        {
            type: 'input',
            message: 'Who are the contributors?',
            name: 'contributors'
        },
        {
            type: 'input',
            message: 'What is your Github profile?',
            name: 'profile'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        }
    ])
}

async function init() {
    try {
        const data = await promptUser();
        const generatepageContent = generateMarkdown(data);
        await writeFile('testREADME.md', generatepageContent);
        console.log('You made your README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();