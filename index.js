//Sub Class of Employee
const inquirer = require("inquirer");
const fs = require("fs");
//Need inquirer for each employee.js, engineer.js, intern.js file etc
// const asyncWrite = util.promisify(fs.writeFile)
const Engineer = require ("./lib/Engineer");
const intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

const generateHTML = (responses) => {
''
}
generalQuestions = [
  { 
    type: 'input',
    name: 'name',
    message: 'What is your name (First, Last)?',
  },{
    type: 'input',
    name: 'id',
    message: 'What is your employee id number?',
  },{
    type: 'input',
    name: 'email',
    message: 'What is your e-mail address?',
  },]
// inquirer
//   .prompt([
//       generalQuestions[0],
//       generalQuestions[1],
//       generalQuestions[2],
//       generalQuestions[3],
//Manager:
//       {
//         type: 'input',
//         name: 'officeNumber',
//         message: 'What is your working office number?',
//       },
//       //Engineer:
//       {
//         type: 'input',
//         name: 'gitHub',
//         message: 'What is your github username?',
//       },
//       //Intern:
//       {
//         type: 'input',
//         name: 'school',
//         message: 'What school do you go to?',
//       },

    // ]).then((responses) => {
    //     const filename = `${responses.title}.html`; //'README.md' or '${inquiryResponses.title}.md' to name the top of the readmefile tab. Note:Putting it as readme.md WILL replace current readme file that I created.
    //     return asyncWrite(filename, generateHTML(responses) )}
    // ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)}) ;

    const askQuestion = () =>{
        inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do next?",
                choices: ["Add Manager","Add Intern","Add Engineer", "Build team"],
                name: "userChoice",
    
            }
        ])
        .then(response => {
            switch (response.userChoice){
                case "Add Manager": 
                addManager();
                break;
                case "Add Intern": 
                addIntern();
                break;
                case "Add Engineer": 
                addEngineer();
                break;
                default: 
                buildTeam();
            }
            //console.log(response.userChoice)
        })
    }
    askQuestion();
    
    const addManager = ()=>{
        inquirer
      .prompt([
          generalQuestions[0],
          generalQuestions[1],
          generalQuestions[2],
          //Manager:
          {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your working office number?',
          },
        ])
        .then(response =>{
            console.log(response)
            askQuestion();
        })
        
    }

    const addIntern = ()=>{
      inquirer
    .prompt([
        generalQuestions[0],
        generalQuestions[1],
        generalQuestions[2],
        //Intern:
        {
        type: 'input',
        name: 'school',
        message: 'What school do you go to?',
       },
      ])
      .then(response =>{
          console.log(response)
          askQuestion();
      })
      
  }
  const addEngineer = ()=>{
    inquirer
  .prompt([
      generalQuestions[0],
      generalQuestions[1],
      generalQuestions[2],
      //Engineer:
      {
        type: 'input',
        name: 'gitHub',
        message: 'What is your github username?',
      },
    ])
    .then(response =>{
        console.log(response)
        askQuestion();
    })
    
}
    