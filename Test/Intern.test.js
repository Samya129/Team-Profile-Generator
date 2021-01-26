const Intern = require("../lib/Intern.js");


describe('Intern Sub Class', () => {
    describe('Confirmation of Intern properties/school', () => {
      // Positive test
      it("This will confirm that a School was inputted", () => {
        // Arrange
        const schoolTest = 'NYU';
  
        // Act
        const internObj = new Intern ("Foo","InternTest@gmail.com",1, schoolTest );
  
        // Assert
        expect(internObj.school).toEqual("NYU");
      });

      it("Should appear invalid if user does not input a string value", () => {
        // Arrange
        const textString = new  Intern("Foo", 1, "St.Johns@gmail.com", "");
          expect(() => {
            if (textString.school === "")
            throw new Error("You did not add a valid string.");
          }).toThrow("You did not add a valid string.");
      });
      });
  });
