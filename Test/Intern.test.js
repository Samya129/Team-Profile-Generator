const Intern = require("../lib/Intern.js");

describe('Intern Sub Class', () => {
    describe('Confirmation of Intern Properties/School', () => {
      // Positive test
      it("This will confirm that a School was inputted", () => {
        // Arrange
        const schoolTest = 'NYU';
  
        // Act
        const obj = new Intern("Foo",1, "InternTest@gmail.com", schoolTest );
  
        // Assert
        expect(obj.text).toEqual(text);
      });

      // Exception test
    it("should throw an error if not provided a 'text' value", () => {
        // Arrange
        const cb = () => new To();
        const err = new Error(
          "Expected parameter 'text' to be a non empty string"
        );
  
        // Assert
        expect(cb).toThrowError(err);
      });
    });
  });





  describe("Intern", () => {
    // TODO: Add a comment describing the purpose of the following test suite
    describe("Initialization", () => {
      //Testing if we can create a new child object
      it("should create an object with a name, id, and email if provided valid arguments", () => {
        const child = new Child("Sarah", 3);
  
        // TODO: Add a comment describing the purpose of the following statements
        //checking to see if the parameters we passed through are attributes of the object
        expect(child.name).toEqual("Sarah");
        expect(child.age).toEqual(3);
      });
  
      it("should throw an error if provided no arguments", () => {
        // TODO: Add a comment describing the purpose of the following expression
        //creating an empty child object
        const cb = () => new Child();
  
        // TODO: Add a comment describing the purpose of the following statement
        //checking to see if empty child object throws an error when passed through(no arguments)
        expect(cb).toThrow();
      });
  
      it("should throw an error if not provided an age", () => {
        const cb = () => new Child("Sarah");
  
        // TODO: Add a comment describing the purpose of the following declaration
        //has to be positive number or a number that is valid
        const err = new Error("Expected parameter 'age' to be a non-negative number");
  
        // TODO: Add a comment describing the purpose of the following statement
        //if only name is passed through and no age, throw the error this error specifically not in general
        expect(cb).toThrowError(err);
      });
  
      it("should throw an error if 'name' is not a string", () => {
        const cb = () => new Child(3, 2);
        const err = new Error("Expected parameter 'name' to be a non-empty string");
  
        expect(cb).toThrowError(err);
      }); //if err error is thrown when nonstring name is passed through -> 3 is not a name
  
      it("should throw an error if 'age' is not a number", () => {
        const cb = () => new Child("Sarah", "2");
        const err = new Error("Expected parameter 'age' to be a non-negative number");
  
        expect(cb).toThrowError(err);
      });//if err error is thrown when non-number is passed as a number
  
      it("should throw an error if 'age' is less than 0", () => {
        const cb = () => new Child("Sarah", -1);
        const err = new Error("Expected parameter 'age' to be a non-negative number");
  
        expect(cb).toThrowError(err);
      });//if err error is thrown when the age passed is negative
    });
  });
  
  //unit test