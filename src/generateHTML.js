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
    const generateTeam = generatePage(employeeCards);

    return generateTeam;

}

const generatePage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
        <link rel="stylesheet" href="./dist/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <div class="mt-0 py-5 text-center bg-dark text-white">
                <h1>Team Profile</h1>
            </div>
        </header>
        <!--Team Profiles-->
        <main>
            <div class="row justify-content-center m-4" id="teamProfiles">
                ${emmployeeCards}
            </div>
    
        </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        </body>
        </html>
    `;
}

