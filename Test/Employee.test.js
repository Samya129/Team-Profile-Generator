const Employee = require("../lib/Employee.js");

describe("Employees",() =>{
  describe("Initialization", () =>{
    it("should create an object with 'employees' array, name, email, and id.",()=>{
      //creates a new array of the 'employees'
      const team = new Team();

      //Verify that the new object has the correct properties
      expect(team).toEqual({ employees: ["Foo"], email: "EmployeeTest@gmail.com", id: 0 });
    });
  });

describe("Add Employee", () => {
  it("Should add an employee to the 'employees' array", () => {
    // create new objects to test with
    const employee = new Employee("Vanessa Cordova", member.email,6)
    const team = new Team();

    //Add the employee object to the team object
    team.addEmployee(employee);

    //Verify that the employee was added to the team array
    expect(team.employees.length).toEqual(1);
    expect(team.employees[0].toBe(employee));
  });
  it("should not add an employee if the 'inputs' are empty", ()=>{
    const employee = new Employee("", member.email === "",member.id === "" )
    const team = new Team(); 
  })
})}) 

//     Exception test
//   it("should throw an error if not provided an object value", () => {
//       // Arrange
//       const cb = () => new To();
//       const err = new Error(
//         "Expected parameter 'text' to be a non empty string"
//       );

//       // Assert
//       expect(cb).toThrowError(err);
//     });
//   });
// });
