//Sub Class of Employee
const Employee = require('./Employee');
class Intern extends Employee{
   constructor(name, email, id, school){ 
    super(name, email, id);
    this.school =school ;
    this.type = "Intern";
    // this.information = ()=> {
    //     console.log(`Name: ${this.name}, Email:${this.email},ID:${this.id}, College: ${this.school}!`);
    // };
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