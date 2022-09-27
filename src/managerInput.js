const inquirer = require("inquirer");
const fs = require('fs');

const HTMLContent = ({ name, id, email, officeNumber }) =>
    `<div class="col">
<div class="card m-4" style="width: 18rem;" id="managerCard">
<div class="card-header" style="background-color: #0177f7; color: white;">
<h2 id="managerNameSection">${name}</h2>
<br>
<h3 id="managerRoleSection">Manager</h3>
</div>
<div class="card-body">
<ul class="list-group list-group-flush">
<li class="list-group-item" id="managerIdSection">ID: ${id}</li>
<li class="list-group-item" id="managerEmailSection">Email: <a href="mailto:${email}">${email}</a></li>
<li class="list-group-item" id="officeNumberSection">Office Number: ${officeNumber}</li>
</ul>
</div>
</div>
</div>`;

function managerQuestions() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please input Team Manager's name."
            },
            {
                type: "number",
                name: "id",
                message: "Please input Team Manager's Employee Id."
            },
            {
                type: "input",
                name: "email",
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
                choices: ["Engineer", "Intern", "Done"]
            },
        ])
}


module.exports = { HTMLContent, managerQuestions };