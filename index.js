const inquirer = require("inquirer");
const fs = require('fs');

const teamInput = [
    {
        type: "input",
        name: "name",
        message: "Please input Team Manager's name."
    },
    {
        type: "input",
        name: "id",
        message: "Please input Team Manager's Employee Id."
    },
    {
        type: "input",
        name: "email",
        message: "Please input Team Manager's email."
    }, 
    {
        type: "input",
        name: "officeNumber",
        message: "Please input Team Manager's office number."
    },
    {
        type: "list",
        name: "employeeType",
        message: "Do you want to input an Engineer or an Intern?",
        choices: ["Engineer", "Intern"]
    }
];

function internEngineer(){
    let employeeType = answers.employeeType;
    if(employeeType === "Intern"){
        teamInput = [
            {
                type: "input",
                name: "school",
                message: "What school does the Intern attend?"
            }

        ];
    }else if(employeeType === "Engineer"){
        teamInput = [{
            type: "input",
            name: "github",
            message: "What is the link to the Engineer's GitHub?"
        }
    ];
    }
}
internEngineer();

function writeTOFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){

    })
};

function init() {
    console.log("yay");
    inquirer.prompt(teamInput).then(function(answers){
        let output;
let HTMLContent = `<h1>Team Roster</h1>








`
    })
}