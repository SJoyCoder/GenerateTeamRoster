const inquirer = require("inquirer");
const fs = require('fs');


const HTMLContent = ({ role, github, name , id, email }) =>
`<div class="col">
<div class="card m-4" style="width: 18rem;" id="engineerCard">
<div class="card-header" style="background-color: #0177f7; color: white;">
<h2 id="engineerNameSection">${name}</h2>
<br>
<h3 id="EngineerRoleSection">${role}</h3>
</div>
<div class="card-body">
<ul class="list-group list-group-flush">
<li class="list-group-item" id="engineerIdSection">ID: ${id}</li>
<li class="list-group-item" id="engineerEmailSection">Email: ${email}</li>
<li class="list-group-item" id="githubSection">GitHub: ${github}</li>
</ul>
</div>
</div>
</div>
</div>`

inquirer
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
                type: "number",
                name: "github",
                message: "Please input Engineer's GitHub."
            },
        ])    
        
        .then((answers) => {
            const htmlPageContent = HTMLContent(answers); 
            
            fs.writeFile("./renderedHTML.HTML", htmlPageContent, (err) =>
            err ? console.log(err) : console.log("Successfully created HTML")
            );
            console.table(answers);
        })