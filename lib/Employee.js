class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //method to get name of employee
    getName() {
        //returns the Employee object's name property
        return this.name;
    }
    
    //getId method to return the id of the Employee
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}


module.exports = Employee;