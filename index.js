const inquirer = require("inquirer");
const fs = require('fs');

    
    const HTMLContent = ({ managerName, managerId, managerEmail, officeNumber }) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Roster</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.CSS">
    </head>
    <body>
    <header>
    <nav class="navbar p-4 mb-5" style="background-color: #e74755;">
    <div class="container-fluid">
    <span class="navbar-brand mb-0 h1" style="color: white; font-size: 35px;">Team Roster</span>
    </div>
    </nav>
    </header>
    
    <div class="row row-cols-1 row-cols-md-3 g-3">
    <div class="col">
    <div class="card m-4" style="width: 18rem;" id="managerCard">
    <div class="card-header" style="background-color: #0177f7; color: white;">
    <h2 id="managerNameSection">${managerName}</h2>
    <br>
    <h3 id="managerRoleSection">Manager</h3>
    </div>
    <div class="card-body">
    <ul class="list-group list-group-flush">
    <li class="list-group-item" id="managerIdSection">ID: ${managerId}</li>
    <li class="list-group-item" id="managerEmailSection">Email: ${managerEmail}</li>
    <li class="list-group-item" id="officeNumberSection">Office Number: ${officeNumber}</li>
    </ul>
    </div>
    </div>
    </div>
    

    </div>
    
    
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
    
    </body>
    </html>`;
    
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "Please input Team Manager's name."
            },
            {
                type: "number",
                name: "managerId",
                message: "Please input Team Manager's Employee Id."
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please input Team Manager's email."
            }, 
            {
                type: "number",
                name: "officeNumber",
                message: "Please input Team Manager's office number."
            },
            {
                type: "list",
                name: "employeeType",
                message: "Do you want to input an Engineer or an Intern?",
                choices: ["Engineer", "Intern", "Not Right Now"]
            }
        ])        
        .then((answers) => {
            const htmlPageContent = HTMLContent(answers); 

            if(employeeType === "Engineer"){


            }else if(employeeType === "Intern"){
                

            }else{


            }
            
            fs.writeFile("./renderedHTML.HTML", htmlPageContent, (err) =>
            err ? console.log(err) : console.log("Successfully created HTML")
            );
            console.table(answers);
        })