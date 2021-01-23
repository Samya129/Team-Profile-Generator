const Employee = require("../lib/Employee.js");


describe('Employee Parent Class', () => {
    describe('Confirmation of Employee Properties', () => {
      // Positive test
      it("should create an object with a 'text' property set to the 'text' argument provided when called with the 'new' keyword", () => {
        // Arrange
        const text = 'Pick up milk';
  
        // Act
        const obj = new Employee(name);
  
        // Assert
        expect(obj.text).toEqual(text);
      });

      // Exception test
    it("should throw an error if not provided a 'text' value", () => {
        // Arrange
        const cb = () => new Todo();
        const err = new Error(
          "Expected parameter 'text' to be a non empty string"
        );
  
        // Assert
        expect(cb).toThrowError(err);
      });
    });
  });