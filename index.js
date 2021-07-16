// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the name of the project?",
        name: "title"
    },
    {
        message: 'Please provide a description of your project',
        name: 'description'
    },
    {
        message: 'Please provide a table of contents',
        name: 'contents'
    },
    {
        message: 'How will this project be used?',
        name: 'usage'
    },
    {
        message: 'Please provide the license',
        name: 'license'
    },
    {
        message: 'Who are the contributors?',
        name: 'contributors'
    },
    {
        message: 'Any questions?',
        name: 'questions'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();