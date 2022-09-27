const inquirer = require("inquirer");
const fs = require('fs');


const HTMLContent = ({ school, name, id, email }) =>
    `    <div class="col">
<div class="card m-4" style="width: 18rem;" id="internCard">
<div class="card-header" style="background-color: #0177f7; color: white;">
<h2 id="internNameSection">${name}</h2>
<br>
<h3 id="internRoleSection">Intern</h3>
</div>
<div class="card-body">
<ul class="list-group list-group-flush">
<li class="list-group-item" id="internIdSection">ID: ${id}</li>
<li class="list-group-item" id="internEmailSection">Email: <a href="mailto:${email}">${email}</a></li>
<li class="list-group-item" id="internSchoolSection">School: ${school}</li>
</ul>
</div>
</div>
</div>
</div>
</div>`
function internQuestions() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please input Intern's name."
            },
            {
                type: "number",
                name: "id",
                message: "Please input Intern's Employee Id."
            },
            {
                type: "input",
                name: "email",
                message: "Please input Intern's email."
            },
            {
                type: "input",
                name: "school",
                message: "Please input Intern's school."
            },
            {
                type: "list",
                name: "employeeType",
                message: "Do you want to input an Engineer or an Intern?",
                choices: ["Engineer", "Intern", "Done"]
            },
        ])
}

module.exports = { HTMLContent, internQuestions };
