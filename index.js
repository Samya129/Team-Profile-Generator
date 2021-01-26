const inquirer = require("inquirer");
const fs = require("fs");
// const asyncWrite = util.promisify(fs.writeFile)
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Employee = require("./lib/Employee");
//why is this not working?
const members = [];

const buildTeam = ()=>{ 
  const head = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team-Profile Generator</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
      <link rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"/>
  </head>
  <body>
      <div style="background-color: rgb(218, 88, 88); text-align: center; color: white;" class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">My Team</h1>
            <p class="lead"></p>
          </div>
      </div>`
      const footer = `</body>
      </html>`
  //console.log(members)
  let employee = ""
  members.map(function(member){
//let appendIntern = "";
  if (member.getRole() === 'Intern'){
    //console.log("hi!")
    employee += `<div class="row">
    <div class="col-md-4">
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

   else if(member.getRole() ==="Manager"){
// let appendManager = "";
employee += `<div class="row">
<div class="col-md-4">
<div class="card" style="width: 18rem;">
    <div class="card-body" style="background-color: rgb(106, 106, 221);">
      <h5 class="card-title">Name:${member.name}</h5>
      <h6 class="card-title"></h6>
      <i class="fas fa-mug-hot"> Manager</i>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item email">Email:${member.email}</li>
      <li class="list-group-item id">ID:${member.id}</li>
      <li class="list-group-item officeNumber">Office Number:${member.officeNumber}</li>
    </ul>
  </div>
 </div> `
   
} else {
//let appendEngineer = "";
employee += `<div class="row"> 
<div class="col-md-4">
<div class="card" style="width: 18rem;">
    <div class="card-body" style="background-color: rgb(106, 106, 221);">
      <h5 class="card-title">Name:${member.name}</h5>
      <h6 class="card-title"></h6>
      <i class="fas fa-glasses"> Engineer</i>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item email">Email:${member.email}</li>
      <li class="list-group-item id">ID:${member.id}</li>
      <li class="list-group-item gitHub">Github:${member.gitHub}</li>
    </ul>
  </div>
</div>`

}
   }
  );
  // console.log(employee)
  //console.log(head+employee+footer)
  //write the file xyzy
  const fileName = "./dist/Team-Profile-Generator.html";
  const appendHtml = (head+employee+footer);
  
  fs.writeFile(fileName, appendHtml, (error) =>
  error ? console.error(error) : console.log("Success!")
  );
}

generalQuestions = [
  { 
    name: 'name',
    type: 'input',
    message: "Please enter team member's name (First, Last)?",
    //validate: cat
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
      const intern = new Intern(response.name, response.email, response.id, response.school, "6427839")
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


//grabbing the amount of cards of employees.
//append cards to html string
//
// var body  ;
// team.forEach(member => {
//  body += member
//  console.log(body)
  
// });



// .then((response) => {
//   // },
//           const filename = `${response.title}.html`;  
//           return asyncWrite(filename, generateHTML(response) )}
//       ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)}) ;
//   //Need to add Employee on line 7
//   const filename = 
//   buildTeam.read = function(filename)

//   const FileIO = require("./fileIO");

// const fileIO = new FileIO();

// fileIO.write('Team-profile-generator.html', "Working?");

// const testingHTML = fileIO.read('Team-profile-generator.html');

// console.log(testingHTML);

// fileIO.append("message.txt", "\nGoodbye World!");

// const message2 = fileIO.read("message.txt");

// console.log(message2);
