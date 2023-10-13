const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./generateMarkdown.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the project?',
            validate: (value) => value ? true : 'Input value required',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of the project',
            validate: (value) => value ? true : 'Input value required',
        },   
        { 
            type: 'input',
            name: 'installation',
            message: 'What steps are required to use project?', 
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions on how to use project',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List any collaborators / tutorials / 3rd party assets',
        },
        {
            type: 'list',
            name: 'badges',
            message: 'Select any badges',
            choices:[
                '![Static Badge](https://img.shields.io/badge/javascript-yellow)',
                '![Static Badge](https://img.shields.io/badge/css-blue)',
                '![Static Badge](https://img.shields.io/badge/hrml-orange)',
                '![Static Badge](https://img.shields.io/badge/javascript-node.js-green)',
                '![Static Badge](https://img.shields.io/badge/css-bootstrap-purple)',
                '![Static Badge](https://img.shields.io/badge/SMU%20EDx%20bootcamp-red)',
            ],
        },
        {
            type: 'input',
            name: 'features',
            message: 'List any features',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license',
            choices: ['MIT License','GNU General Public License v3.0','Apache License 2.0','N/a'],
            validate: (value) => value ? true : 'Input value required',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
            validate: (value) => value ? true : 'Input value required',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: (value) => value ? true : 'Input value required',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'What is your LinkedIn username?',
        },
    ])
    /* .then(({
        title,
        description,
        installation,
        usage,
        credits,
        badges,
        features,
        license,
        github,
        email
    })=>{
        
        template();
        writeToFile(title,template);
    }); */
}; 

function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.split(' ').join('')}.md`, data, (err)=>{
        if(err){console.log(err);}
        console.log('Your README has been generated');
    })
}

function init() {
    promptUser()
        .then((data) => writeToFile('./files/README', template(data)))
        .then(() => console.log('Successfully wrote to files folder'))
        .catch((err) => console.error(err));
};

init();