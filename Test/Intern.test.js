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
        const textString = new  Intern("Foo", 1, "St.Johns@gmail.com", "");
          expect(() => {
            if (textString.school === "")
            throw new Error("Opps, you did not enter any school. Please enter a valid school.");
          }).toThrow("Opps, you did not enter any school. Please enter a valid school.");
      });
      });
  });