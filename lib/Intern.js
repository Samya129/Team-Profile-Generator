//Sub Class of Employee
const Employee = require('./Employee');
//This constructor creates a series of values and creates o
class Intern extends Employee{
   constructor(name, email, id, school){ //could make this into function Intern but error?
    super(name, email, id);
    this.school =school ;
    this.type = "Intern";
    this.information = ()=> {
        console.log(`Name: ${this.name}, Email:${this.email},ID:${this.id}, College: ${this.school}!`);
    };
   } 
   
   //new object using intern constructor
//    const samya = new Intern('Samya','samya@gmail.com',2, 'MIT');
//    samya.information();
   
getRole(){
    return 'Intern';
}
getSchool(){
return this.school;
}
}
module.exports = Intern;