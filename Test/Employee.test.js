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







  describe("Add Employee", () => {
  it("Should confirm that a new employee was added to the array", () => {
    // create new objects to test with
    const employee = new Employee("name", "email","id", "officeNumber")
    

    //Add the employee object to the employee object
    employee.addEmployee(employee);

    //Verify that the employee was added to the employee array
    expect(employee.length).toEqual(1);
    expect(employee[0].toBe(employee));
  });
  // it("should not add an employee if the 'inputs' are empty", ()=>{
  //   const employee = new Employee({ name: "name", email: "email", id: "id", contact: "officeNumber"})
  //   const team = new Team(); 
  // })
})
}) 