//Import Employee class
const Employee = require('../lib/Employee');

//create manager class that extends off of the Employee parent classs
class Manager extends Employee {
    //create new constructor for the manager class
    constructor(name, id, email, officeNumber) {
        //inherit the parent class
        super(name, id, email)

        this.officeNumber = officeNumber;
    }

    //override getRole from parent class
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;