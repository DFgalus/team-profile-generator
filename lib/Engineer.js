const Employee = require('../lib/Employee');


//create Engineer class and extend it from Employee class
class Engineer extends Employee {
    //add new constructor for Engineer object
    constructor(name, id, email, github) {
        //Inherit the properties from the Employee parent class
        super(name, id, email);

        this.github = github;
    }
}