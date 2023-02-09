const Employee = require('../lib/Employee');


//create Engineer class and extend it from Employee class
class Engineer extends Employee {
    //add new constructor for Engineer object
    constructor(name, id, email, github) {
        //Inherit the properties from the Employee parent class
        super(name, id, email);

        this.github = github;
    }

    //method to get GitHub
    getGithub() {
        return this.github;
    }

    //method to override parent getRole method and return role as 'Engineer'
    getRole() {
        return "Engineer";
    }


}

module.exports = Engineer;