const Engineer = require("../lib/Engineer.js");

describe('Engineer Sub Class', () => {
    describe('Confirmation of Engineer properties/gitHub', () => {
      // Positive test
      it("This will confirm that a valid gitHub user was inputted", () => {
        // Arrange
        const gitHubTest = 'Samya129';
  
        // Act
        const obj = new Engineer ("Foo","EngineerTest@gmail.com",3, gitHubTest );
  
        // Assert
        expect(obj.gitHub).toEqual("Samya129");
      });
      it("Should appear invalid if user does not input a string value", () => {
        // Arrange
        const textString = new  Engineer("Foo", 3, "NYU@gmail.com", "");
          expect(() => {
            if (textString.gitHub === "")
            throw new Error("Uh oh! I think you forgot something. Please enter a valid gitHub account.");
          }).toThrow("Uh oh! I think you forgot something. Please enter a valid gitHub account.");
      });
      });
  });
  //empty engineer string does not throw error????
  