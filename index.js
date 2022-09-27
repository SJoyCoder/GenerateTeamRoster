const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const employeeArray = [];
const {HTMLContent:managerHTMLContent, managerQuestions} = require("./src/managerInput");
const {HTMLContent:engineerHTMLContent, engineerQuestions} = require("./src/engineerInput");
const {HTMLContent:internHTMLContent, internQuestions} = require("./src/internInput");
const employeeHTMLArray = [];

    
const HTMLContent = (header) => 
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

<section>    
${header}

</section>    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
    
    </body>
    </html>`;
 

    
 managerQuestions()
 .then((managerData) => {
    let newManager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
    employeeArray.push(newManager);
    console.log("HELLO")
    nextEmployee(managerData.employeeType);
});
 function nextEmployee(employeeType){
    if(employeeType === "Engineer"){
        engineerQuestions()
        .then((engineerData) => {
            let newEngineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
            employeeArray.push(newEngineer);
            nextEmployee(engineerData.employeeType);
        })
    }else if(employeeType === "Intern"){
        internQuestions()
        .then((internData) => {
            let newIntern = new Intern(internData.name, internData.id, internData.email, internData.school);
            employeeArray.push(newIntern);
            nextEmployee(internData.employeeType);
        })
    }else if(employeeType === "Done"){
            for (let i = 0; i < employeeArray.length; i++) {
               if(employeeArray[i].getRole() === "Manager"){
                employeeHTMLArray.push(managerHTMLContent(employeeArray[i]));
               }else if(employeeArray[i].getRole() === "Engineer"){
                employeeHTMLArray.push(engineerHTMLContent(employeeArray[i]));
               }else if(employeeArray[i].getRole() === "Intern"){
                employeeHTMLArray.push(internHTMLContent(employeeArray[i]));
               }
            
            }
            const htmlPageContent = HTMLContent(employeeHTMLArray); 
    
            fs.writeFile("./renderedHTML.HTML", htmlPageContent, (err) =>
            err ? console.log(err) : console.log("Successfully created HTML")
            );
            console.log(employeeHTMLArray);
    }

    
}

// function finishRoster(employeeType){
//     if(employeeType === "Done"){
//         .then((answers) => {
//             const htmlPageContent = HTMLContent(answers); 
    
//             fs.writeFile("./renderedHTML.HTML", htmlPageContent, (err) =>
//             err ? console.log(err) : console.log("Successfully created HTML")
//             );
//             console.table(answers);
//         })

//     }
