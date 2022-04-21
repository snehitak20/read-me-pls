// Prompt: 
    // Application repository [Name of the application's repository]
    // Title [Title of the readme] 
    // Table of contents --> links take you to the respective areas --> WITHIN generatemarkdown
    // Description [Give a short description about your project] 
    // Installation [How to install this application] 
    // Usage [How to navigate this application] 
    // License: give a list of options--> badge at the top of the page, explanation of license at the bottom [SEE LICENSE.js file]
    // Contributors [Who are the contributors?] 
    // Tests???
    // QUESTIONS 
        // GitHub username--> links to GitHub profile 
        // If there any additional questions, reach me at EMAIL?
// NEW README: call it generate.md 

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// First create a NEW function(textInput)--> THEN when the function actually runs--> inquirer will prompt the user with the following questions
function textInput() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your repository link?',
            name: 'repository',
        },
        {
            type: 'input', 
            message: 'What is the title of your application?',
            name: 'fileName',
        },
        {
            type: 'input', 
            message: 'Write a short description about your application.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What steps are required to install this application?',
            name: 'installation',
        },
        {
            type: 'input', 
            message: 'How do you use this application?', 
            name: 'usage', 
        },
        {
            type: 'list',
            message: 'Select the kind of license needed for this application.',
            name: 'license', 
            choices: ['Apache 2.0', 'GPL License', 'MIT'],
        }, 
        {
            type: 'input', 
            message: 'How do you test this application?', 
            name: 'test', 
        },
        {
            type: 'input', 
            message: 'How can you contribute to this repository?', 
            name: 'contribute', 
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'username', 
        }, 
        {
            type: 'input', 
            message: 'What is your email address?',
            name: 'email', 
        },
        {
            type: 'input',
            message: 'What is the title of your new ReadMe file?',
            name: 'title',
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, (err) => 
    err ? console.error(err) : console.log(`${fileName}.md has been generated.`)
    );
}

// TODO: Create a function to initialize app
// async/await: returns a promise--> runs the textInput function--> 
async function init() {
    let answers = await textInput();
    writeToFile((answers.fileName),(generateMarkdown(answers)));
}

// Function call to initialize app
init();
