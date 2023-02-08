//import Employee class
const Employee = require('../lib/Employee');

//create new class for intern that extends from the parent class
class Intern extends Employee {
    constructor(name, id, email, school) {
        //inherit properties from the parent class
        super(name, id, email);

        this.school = school;
    }

    //method to retrieve intern's school
    getSchool() {
        return this.school;
    }

    //override getRole from parent class
    getRole() {
        return "Intern";
    }
}