//Sub Class of Employee
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, email, id, gitHub, contact) {
    super(name, email, id, contact);
    this.gitHub = gitHub;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.gitHub;
  }
}
module.exports = Engineer;
