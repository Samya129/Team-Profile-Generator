//Sub Class of Employee
const Employee = require('./Employee');

class Intern extends Employee{
   constructor(school){
    super(name, email, id);
    this.school =school ;
   } 
getRole(){
    return 'Intern';
}
getSchool(){
return this.school;
}
}
module.exports = Intern;