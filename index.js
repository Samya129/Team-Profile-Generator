const inquirer = require("inquirer");
//Need inquirer for each employee.js, engineer.js, intern.js etc

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What would you like the title of this project to be called?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions you want to add for your project?',
      },
      {
        type: 'input',
        name: 'usageInfo',
        message: 'What are the required usage information needed for this project?',
      },
      {
        type: 'list',
        message: 'What is the license for this project?',
        name: 'license',
        choices: ['MIT', 'Apache', 'Boost', 'BSD','Eclipse','None'],
      },
      {
        type: 'input',
        message: 'Any contributing guidelines you would like to add? If not applicable, type NA or just press enter',
        name: 'contributingGuidelines',
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: 'What are the test instructions for this project?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },

    ]).then((inquiryResponses) => {
        const filename = `${inquiryResponses.title}.`; //'README.md' or '${inquiryResponses.title}.md' to name the top of the readmefile tab. Note:Putting it as readme.md WILL replace current readme file that I created.
        return asyncWrite(filename, generateREADME(inquiryResponses) )}
    ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)}) ;