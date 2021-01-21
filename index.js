const inquirer = require("inquirer");
//Need inquirer for each employee.js, engineer.js, intern.js etc

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
        name: 'officeNumber',
        message: 'What is your working office number?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?',
      },
    ]).then((inquiryResponses) => {
        const filename = `${inquiryResponses.title}.`; //'README.md' or '${inquiryResponses.title}.md' to name the top of the readmefile tab. Note:Putting it as readme.md WILL replace current readme file that I created.
        return asyncWrite(filename, generateREADME(inquiryResponses) )}
    ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)}) ;