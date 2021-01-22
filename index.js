const inquirer = require("inquirer");
const fs = require("fs");
// const asyncWrite = util.promisify(fs.writeFile)
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const employees = [];

const generateHTML = (response)=>{
  ''
}

generalQuestions = [
  { 
    name: 'name',
    type: 'input',
    message: "Please enter team member's name (First, Last)?",
  },
  {
    name: 'email',
    type: 'input',
    message: "What is the team member's e-mail address?",
  },
  {
    name: 'id',
    type: 'input',
    message: "What is the team member's id number?",
  },]
// inquirer
//   .prompt([
//       generalQuestions[0],
//       generalQuestions[1],
//       generalQuestions[2],
//      ])
//     .then((response) => {
// },
//         const filename = `${response.title}.html`; //'README.md' or '${inquiryResponse.title}.md' to name the top of the readmefile tab. Note:Putting it as readme.md WILL replace current readme file that I created.
//         return asyncWrite(filename, generateHTML(response) )}
//     ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)}) ;

    const askQuestion = () =>{
        inquirer
        .prompt([
            {
              name: "userChoice",
              type: "list",
              message: "What would you like to do?",
              choices: ["Add Intern","Add Manager","Add Engineer", "Build team"],
    
            }
        ])
        .then(response => {
            switch (response.userChoice){
                case "Add Intern": 
                addIntern();
                break;
                case "Add Manager": 
                addManager();
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

//Intern Questions
  const addIntern = ()=>{
    inquirer
  .prompt([
    //General questions to be asked first before sub-questions
    generalQuestions[0],
    generalQuestions[1],
    generalQuestions[2],
      {
        name: 'school',
        type: 'input',
        message: 'What school do you go to?',
      },
    ])
    .then(response =>{
        //console.log(response)
        askQuestion();
    }) 
}
//Manager Questions
  const addManager = ()=>{
    inquirer
  .prompt([
    generalQuestions[0],
    generalQuestions[1],
    generalQuestions[2],
      {
        name: 'officeNumber',
        type: 'input',
        message: 'What is your working office number?',
      },
    ])
    .then(response =>{
        //console.log(response)
        askQuestion();
    }) 
}
//Engineer Questions
  const addEngineer = ()=>{
    inquirer
  .prompt([
    generalQuestions[0],
    generalQuestions[1],
    generalQuestions[2],
      {
        name: 'gitHub',
        type: 'input',
        message: 'What is your github username?',
      },
    ])
    .then(response =>{
        //console.log(response)
        askQuestion();
    })
}