//Sub Class of Employee
const Employee = require('./Employee');

class Manager extends Employee{
  constructor (name, email, id, officeNumber) {
    //Should I include the name, email, and id if not parent class?
    super(name, email, id);
    this.officeNumber = officeNumber;
  }  
  getRole(){
      return 'Manager';
  }
  getOfficeNumber(){
    return this.officeNumber;
  }
}
module.exports= Manager