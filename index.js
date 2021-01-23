const inquirer = require("inquirer");
const fs = require("fs");
// const asyncWrite = util.promisify(fs.writeFile)
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Employee = require("./lib/Employee");
//why is this not working?
const members = [];

// const generateHTML = (response)=>{}
const buildTeam = ()=>{ 
  //console.log(members)
  members.map(function(member){
let appendIntern = "";
  if (response === "Add Intern"){
    appendIntern = `<div class="row">
    <div class="col-6">
        <div class="card" style="width: 18rem;">
            <div class="card-body" style="background-color: rgb(106, 106, 221);">
            <h5 class="card-title">Name:${member.name}</h5>
            <h6 class="card-title"></h6>
            <i class="fas fa-user-graduate"> Intern</i>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item email">Email: ${member.email}</li>
            <li class="list-group-item id">ID:${member.id}</li>
            <li class="list-group-item school">School: ${member.school}</li>
            </ul>
        </div>
    </div>`
  }
})} //testing curlies: Delete later
//    else if("Add Manager"){
// let appendManager = "";
// appendManager = `<div class="row">
// <div class="col-3">
// <div class="card" style="width: 18rem;">
//     <div class="card-body" style="background-color: rgb(106, 106, 221);">
//       <h5 class="card-title">Name:${member.name}</h5>
//       <h6 class="card-title"></h6>
//       <i class="fas fa-mug-hot"> Manager</i>
//     </div>
//     <ul class="list-group list-group-flush">
//     <li class="list-group-item email">Email:${member.email}</li>
//       <li class="list-group-item id">ID:${member.id}</li>
//       <li class="list-group-item officeNum">Office Number:${member.officeNumber}</li>
//     </ul>
//   </div>
// // </div> `
// } else("Add Engineer"){
// let appendEngineer = "";
// appendEngineer = `<div class="col-3">
// <div class="card" style="width: 18rem;">
//     <div class="card-body" style="background-color: rgb(106, 106, 221);">
//       <h5 class="card-title">Name:${member.name}</h5>
//       <h6 class="card-title"></h6>
//       <i class="fas fa-glasses"> Engineer</i>
//     </div>
//     <ul class="list-group list-group-flush">
//     <li class="list-group-item email">Email:${member.email}</li>
//       <li class="list-group-item id">ID:${member.id}</li>
//       <li class="list-group-item gitHub">Github:${member.gitHub}</li>
//     </ul>
//   </div>
// </div>`
// }
//    }
//   )
// }

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
    .then(response => {
      const intern = new Intern(response.name, response.email, response.id, response.school)
      members.push(intern)
        //console.log(response) //Returns the responses of the question and all the properties
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
    .then(response => {
      const manager = new Manager(response.name, response.email, response.id, response.officeNumber)
      members.push(manager)
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
    .then(response => {
      const engineer = new Engineer(response.name, response.email, response.id, response.gitHub)
      members.push(engineer)
        askQuestion();
    })
} 

if (response === "Build team")(){
  //then promise to populate html with their response only UNLESS Build team has no added persons in it.
}
// .then((response) => {
//   // },
  //         const filename = `${response.title}.html`; //'README.md' or '${inquiryResponse.title}.md' to name the top of the readmefile tab. Note:Putting it as readme.md WILL replace current readme file that I created.
  //         return asyncWrite(filename, generateHTML(response) )}
  //     ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)}) ;