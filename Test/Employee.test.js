const Employee = require("../lib/Employee.js");

describe("Employees",() =>{
  describe("Initialization", () =>{
    it("should create an object with 'employees' array, name, email, and contact option(3)",()=>{
      //creates a new array of the 'employees'
      const employee = new Employee("name", "email","id", "officeNumber");
      //console.log(employee)

      //Verify that the new object has the correct properties
      expect(employee).toEqual({ name: "name", email: "email", id: "id", contact: "officeNumber"});
    });
  });

  // describe("Add Employee", () => {
//   it("Should add an employee to the 'employees' array", () => {
//     // create new objects to test with
//     const employee = new Employee("Vanessa Cordova", member.email,6)
//     const team = new Team();

//     //Add the employee object to the team object
//     team.addEmployee(employee);

//     //Verify that the employee was added to the team array
//     expect(team.employees.length).toEqual(1);
//     expect(team.employees[0].toBe(employee));
//   });
//   it("should not add an employee if the 'inputs' are empty", ()=>{
//     const employee = new Employee("", member.email === "",member.id === "" )
//     const team = new Team(); 
//   })
// })}) 