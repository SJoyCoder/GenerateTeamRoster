const inquirer = require("inquirer");
const fs = require('fs');


const HTMLContent = ({ github, name, id, email }) =>
  `<div class="col">
<div class="card m-4" style="width: 18rem;" id="engineerCard">
<div class="card-header" style="background-color: #0177f7; color: white;">
<h2 id="engineerNameSection">${name}</h2>
<br>
<h3 id="EngineerRoleSection">Engineer</h3>
</div>
<div class="card-body">
<ul class="list-group list-group-flush">
<li class="list-group-item" id="engineerIdSection">ID: ${id}</li>
<li class="list-group-item" id="engineerEmailSection">Email: <a href="mailto:${email}">${email}</a></li>
<li class="list-group-item" id="githubSection">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
</ul>
</div>
</div>
</div>
</div>`

function engineerQuestions() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please input Engineer's name."
            },
            {
                type: "number",
                name: "id",
                message: "Please input Engineer's Employee Id."
            },
            {
                type: "input",
                name: "email",
                message: "Please input Engineer's email."
            },
            {
                type: "input",
                name: "github",
                message: "Please input Engineer's GitHub."
            },
            {
                type: "list",
                name: "employeeType",
                message: "Do you want to input an Engineer or an Intern?",
                choices: ["Engineer", "Intern", "Done"]
            },
        ])
}

module.exports = { HTMLContent, engineerQuestions };