//Sub Class of Employee
const Employee = require("./Employee");
class Intern extends Employee {
  constructor(name, email, id, school, contact) {
    super(name, email, id, contact);
    this.school = school;
  }

  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }
}
module.exports = Intern;
