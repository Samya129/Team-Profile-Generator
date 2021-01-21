//Sub Class of Employee
const inquirer = require("inquirer");
//fs needed? const fs = require("fs");
//Need inquirer for each employee.js, engineer.js, intern.js etc
const Engineer = require ("./lib/Engineer");
const intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const employees = [];

const generateHTML = (inquiryResponses) => {

}
inquirer
  .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name (First, Last)?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your employee id number?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?',
      },
      //Start of role questions:
      {
        type: 'checkbox',
        name: 'role',
        message: 'What is your role?',
        choices: ['Manager','Intern','Engineer']
      },
      //Manager:
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your working office number?',
      },
      //Engineer:
      {
        type: 'input',
        name: 'gitHub',
        message: 'What is your github username?',
      },
      //Intern:
      {
        type: 'input',
        name: 'school',
        message: 'What school do you go to?',
      },
    ]).then((inquiryResponses) => {
        const filename = `${inquiryResponses.title}.html`; //'README.md' or '${inquiryResponses.title}.md' to name the top of the readmefile tab. Note:Putting it as readme.md WILL replace current readme file that I created.
        return asyncWrite(filename, generateREADME(inquiryResponses) )}
    ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)}) ;

