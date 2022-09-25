const Manager = require("../lib/Manager");

describe('Manager', () => {
    describe('initialization', () => {
        
        it('should initialize correctly', () => {
            
            let newManager = new Manager("Marcus", 1, "marcus@gmail.com", 123);
            
            expect(newManager.name).toEqual("Marcus");
            expect(newManager.id).toEqual(1);
            expect(newManager.email).toEqual("marcus@gmail.com");
            expect(newManager.officeNumber).toEqual(123);
            
        });

    });

    describe('getOfficeNumber', () => {

        it('should return Office Number for Manager', () => {
            
            let newManager = new Manager("Marcus", 1, "marcus@gmail.com", 123);
            
            expect(newManager.getOfficeNumber()).toEqual(123);

        });
        
    });

    describe('getRole', () => {

        it('should return Manager', () => {

            let newManager = new Manager("Marcus", 1, "marcus@gmail.com", 123);

            expect(newManager.getRole()).toEqual("Manager");
            
        });
        
    });
        
});