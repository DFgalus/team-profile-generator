// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

//include page generation
const generateHTML = require('./src/generateHTML');
//team constructors
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//modules
const fs = require('fs');
const inquirer = require('inquirer');
const { off } = require('process');

//array to add team to

const teamArr = [];

//prompt to add manager
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of your team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter a name for the manager.');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'id',
            message: `What is the manager's id?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter an id for the manager.');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'email',
            message: `What is the manager's email?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter an email for the manager.');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'officeNumber',
            message: `What is the manager's office number?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter an office number for the manager.');
                    return false;
                }
            }
        }, 
    ])
    .then(managerAns => {
        //Destructure manager object 
        const {name, id, email, officeNumber} = managerAns;
        const manager = new Manager(name, id, email, officeNumber);

        //push new manager to the team array
        teamArr.push(manager);
        console.log(manager);
    })
}

const addEmployee = () => {
    console.log(`
    ---------------------
    Adding team members!!
    ---------------------
    `);
    
    //prompt user w/ inquirer
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            choices: ['Engineer', 'Intern']
        }, {
            type: 'input',
            name: 'name',
            message: 'What is the name of your team member?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter a name for the employee.');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'id',
            message: 'What is the id of your team member?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter an id for the employee.');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'email',
            message: 'What is the email of your team member?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter an email for the employee.');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'school',
            message: 'What school does the intern attend?',
            when: (input) => input.role === 'Intern',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter a school for the employee.');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'github',
            message: `Enter the engineer's GitHub username.`,
            when: (input) => input.role === 'Engineer',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter a GitHub username for the employee.');
                    return false;
                }
            }
        }, {
            type: 'confirm',
            name: 'AddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        //destructure properties for employees
        let { name, id, email, school, github, addEmployee } = employeeData;
        let employee;

        if (role === 'Intern') {
            employee = new Intern(employeeData);
            console.log(employee);
        }

        if (role === 'Engineer') {
            employee = new Engineer
        }
    })

}




