const Intern = require("../lib/Intern");

describe('Intern', () => {
    describe('initialization', () => {

        it('should initialize correctly', () => {

            let newIntern = new Intern("Lauren", 1, "lauren@gmail.com", "SMU");

            expect(newIntern.name).toEqual("Lauren");
            expect(newIntern.id).toEqual(1);
            expect(newIntern.email).toEqual("lauren@gmail.com");
            expect(newIntern.school).toEqual("SMU");
            
        });
        
    });

    describe('getSchool', () => {

        it('should return Intern school', () => {
            
            let newIntern = new Intern("Lauren", 1, "lauren@gmail.com", "SMU");

            expect(newIntern.getSchool()).toEqual("SMU");

        });    
        
    });

    describe('getRole', () => {

        it('should return Intern', () => {

            let newIntern = new Intern("Lauren", 1, "lauren@gmail.com", "SMU");

            expect(newIntern.getRole()).toEqual("Intern")
            
        });
        
    });
    
});