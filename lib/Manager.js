//Sub Class of Employee
const Employee = require('./Employee');

class Manager extends Employee{
  constructor (officeNumber) {
    this.officeNumber = officeNumber;
  }  
  getRole(){
      return 'Manager';
  }
}