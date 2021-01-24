const Intern = require("../lib/Intern.js");

describe('Intern Sub Class', () => {
    describe('Confirmation of Intern Properties/School', () => {
      // Positive test
      it("This will confirm that a School was inputted", () => {
        // Arrange
        const schoolTest = 'NYU';
  
        // Act
        const obj = new Intern ("Foo",1, "InternTest@gmail.com", schoolTest );
  
        // Assert
        expect(obj.school).toEqual("NYU");
      });

      // Exception test
    it("should throw an error if not provided an object value", () => {
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
