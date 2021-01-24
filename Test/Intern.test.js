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

    //   // Exception test
    // it("should throw an error if not provided an object value", () => {
    //     // Arrange
    //     const cb = () => new Intern();
    //     const err = new Error(
    //       "Expected parameter 'text' to be a non empty string"
    //     );
  
    //     // Assert
    //     expect(cb).toThrowError(err);
    //   });
    });
  });
