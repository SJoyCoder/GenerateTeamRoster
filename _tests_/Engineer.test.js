const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    describe('initialization', () => {

        it('should initialize correctly', () => {

            let newEngineer = new Engineer("Megan", 1, "megan@gmail.com", "github.com/megan");

            expect(newEngineer.name).toEqual("Megan");
            expect(newEngineer.id).toEqual(1);
            expect(newEngineer.email).toEqual("megan@gmail.com");
            expect(newEngineer.github).toEqual("github.com/megan")

        });
        
    });
    
    describe('getRole', () => {

        it('should return Engineer when asked what the role is', () => {
        
            // Arrange
            //  Assert
            let newEngineer = new Engineer("Megan", 1, "megan@gmail.com", "github.com/megan");

            // Assert
            expect(newEngineer.getRole()).toEqual("Engineer");

        });

    });

});