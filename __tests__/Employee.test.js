const Employee = require('../lib/Employee')


 test('create new Employee object', () => {
    const employee = new Employee("Mark", 40, "Mark232@gmail.com");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    });

//test is getName retrieves employee's name

 test('get employee name', () => {
    const employee = new Employee("Mark", 40, "Mark232@gmail.com");
    expect(employee.getName()).toEqual(expect.any(String));
    });
//test if getId gets id
test('get employee id', () => {
    const employee = new Employee("Mark", 40, "Mark232@gmail.com");
    expect(employee.getId()).toEqual(expect.any(Number));
});


//test if getEmail retrieves email
test('should return employee email', () => {
    const employee = new Employee("Mark", 40, "Mark232@gmail.com");
    expect(employee.getEmail()).toEqual(expect.any(String));
    });
//test getRole method
test('should return employee role', () => {
    const employee = new Employee("Mark", 40, "Mark232@gmail.com");
    expect(employee.getRole()).toEqual("Employee");
    });
