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

    // Exception test
    it("Should appear invalid if user does not input a string value", () => {
      // Arrange
      const textString = new  Manager("Foo", 2, "Cornell@gmail.com", "");
        expect(() => {
          if (textString.officeNumber === "")
          throw new Error("You did not add a valid office number. Please enter a valid 10-digit office number.");
        }).toThrow("You did not add a valid office number. Please enter a valid 10-digit office number.");
    });
    });
  });