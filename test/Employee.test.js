const Employee = require('../lib/Employee')

describe.only('Employee', () => {
    it('Creates a new Employee object'), () => {
        const employee = new Employee("Mark", 40, "Mark232@gmail.com");
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    }
});

//test is getName retrieves employee's name
describe('Employee', () => {
    describe('getName', () => {
        it('should return employee name', () => {
            const employee = new Employee("Mark", 40, "Mark232@gmail.com");
            expect(employee.getName()).toEqual(expect.any(String));
        });
    });
});


//test if getId gets id
describe('Employee', () => {
    describe('getId', () => {
        it('should return employee id', () => {
            const employee = new Employee("Mark", 40, "Mark232@gmail.com");
            expect(employee.getId()).toEqual(expect.any(Number));
        });
    });
});


//test if getEmail retrieves email
describe('Employee', () => {
    describe('getEmail', () => {
        it('should return employee email', () => {
            const employee = new Employee("Mark", 40, "Mark232@gmail.com");
            expect(employee.getEmail()).toEqual(expect.any(String));
        });
    });
});

//test getRole method
describe('Employee', () => {
    describe('getRole', () => {
        it('should return employee role', () => {
            const employee = new Employee("Mark", 40, "Mark232@gmail.com");
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});
