//Parent Class
class Employee {
  constructor(name, email, id, contact) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.contact = contact;
    //This is the key to the value the user enters.
  }

  getRole() {
    return "Employee";
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getId() {
    return this.id;
  }
}

module.exports = Employee;
