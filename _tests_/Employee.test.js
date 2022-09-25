const Employee = require("../lib/Employee") 

describe('Employee', () => {

    describe('initialization', () => {

        it('should get initialized correctly', () => {
            //Arrange
            // Act
            let newEmployee = new Employee("Tom", 1, "tom@gmail.com");

            // Assert
            expect(newEmployee.name).toEqual("Tom");
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual("tom@gmail.com");


        });
    });

    describe('getName', () => {

        it('should return the name I give it', () => {
            
            //Arrange
            // Act
            let newEmployee = new Employee("Tom", 1, "tom@gmail.com");   
            
            // Assert
            expect(newEmployee.getName()).toEqual("Tom");
            
        });
    });
    
    describe('getId', () => {
        
        it('should return the Employee Id number', () => {
            
            let newEmployee = new Employee("Tom", 1, "tom@gmail.com");   
            
            expect(newEmployee.getId()).toEqual(1);
            
        });
        
    });
    
    describe('getEmail', () => {
    
        it('should return Employee email', () => {
    
            let newEmployee = new Employee("Tom", 1, "tom@gmail.com");   
            
            expect(newEmployee.getEmail()).toEqual("tom@gmail.com");
                        
                
        });
            
    });

    describe('getRole', () => {

        it('should return Employee', () => {

            let newEmployee = new Employee("Tom", 1, "tom@gmail.com");   

            expect(newEmployee.getRole()).toEqual("Employee");
            
        });
        
    });
});