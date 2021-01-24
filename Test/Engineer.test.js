const Engineer = require("../lib/Engineer.js");

describe('Engineer Sub Class', () => {
    describe('Confirmation of Engineer Properties/gitHub', () => {
      // Positive test
      it("This will confirm that a valid gitHub user was inputted", () => {
        // Arrange
        const gitHubTest = 'Samya129';
  
        // Act
        const obj = new Engineer ("Foo",3, "EngineerTest@gmail.com", gitHubTest );
  
        // Assert
        expect(obj.gitHub).toEqual("Samya129");
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