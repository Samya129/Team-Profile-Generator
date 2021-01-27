const Employee = require("../lib/Employee.js");

describe("Employees",() =>{
  describe("Confirmation of Full Intern Card", () =>{
    it("should create an object with an 'employee' array, name, email, id, and the intern's school they attend",()=>{
      //creates a new array of the 'employee'
      const iEmployee = new Employee("name", "email","id", this.school);
      //console.log(employee)

      //Verify that the new object has the correct properties
      expect(iEmployee).toEqual({ name: "name", email: "email", id: "id", contact: this.school});
    });
  });

  describe("Confirmation of Full Manager Card", () =>{
    it("should create an object with an 'employee' array, name, email, id, and manager's phone number",()=>{
      //creates a new array of the 'employee'
      const mEmployee = new Employee("name", "email","id", "officeNumber");
      //console.log(mEmployee)

      //Verify that the new object has the correct properties
      expect(mEmployee).toEqual({ name: "name", email: "email", id: "id", contact: "officeNumber"});
    });
  });

  describe("Confirmation of Full Engineer Card", () =>{
    it("should create an object with an 'employee' array, name, email, id, and the engineer's gitHub account",()=>{
      //creates a new array of the 'employee'
      const eEmployee = new Employee("name", "email","id", this.gitHub);
      //console.log(employee)

      //Verify that the new object has the correct properties
      expect(eEmployee).toEqual({ name: "name", email: "email", id: "id", contact: this.gitHub});
    });
  });

  it("Should display an error to the user when nothing is entered for each value", () => {
    const tEmployee = new Employee("", "", "", "");
    expect(() => {
      if (!tEmployee.getName()|| !tEmployee.getId()|| !tEmployee.getEmail()||!tEmployee.contact){
        //console.log(" Entry is empty.Please try again")
      }
        throw new Error("Opps, I think you left this question blank. Please try again.");
    }).toThrow("Opps, I think you left this question blank. Please try again.");
  });
}) 
