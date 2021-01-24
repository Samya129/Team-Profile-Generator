const Manager = require("../lib/Manager.js");

describe('Manager Sub Class', () => {
    describe('Confirmation of Manager properties/officeNumber', () => {
      // Positive test
      it("This will confirm that a office number was inputted", () => {
        // Arrange
        const officeNumberTest = '727-269-7979';
  
        // Act
        const obj = new Manager ("Foo","ManagerTest@gmail.com",2, officeNumberTest );
  
        // Assert
        expect(obj.officeNumber).toEqual("727-269-7979");
      });

    //   // Exception test
    // it("should throw an error if not provided a 'text' value", () => {
    //     // Arrange
    //     const cb = () => new To();
    //     const err = new Error(
    //       "Expected parameter 'text' to be a non empty string"
    //     );
  
    //     // Assert
    //     expect(cb).toThrowError(err);
    //   });
    });
  });
