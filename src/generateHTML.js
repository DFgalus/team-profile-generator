//generate manager profile
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="fa-solid fa-mug-hot"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>`;
};

const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer <i class="fas fa-glasses"> </i></h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${manager.email}</a></p>
                <p class="github">https://github.com/${engineer.github}</p>
            </div>
        </div>
    </div>`;
};

const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern <i class="fas fa-graduation-cap"></i></i></h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>`;
};

generateHTML = (data) => {
    //array for cards on page
    pageArr = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();


        //run manager functuon
        if (role === 'Manager') {
            const managerProf = generateManager(employee);
            pageArr.push(managerProf);
        }

        //engineer generation
        if (role === 'Engineer') {
            const engineerProf = generateEngineer(employee);
            pageArr.push(engineerProf);
        }
        
        if (role === 'Intern') {
            const internProf = generateIntern(employee);
            pageArr.push(internProf);
        }
    }

    //join cards
    const employeeCards = pageArr.join('');

    //return generated HTML 
    const 


}