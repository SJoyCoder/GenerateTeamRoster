const inquirer = require("inquirer");
const fs = require('fs');

const questions = 
[
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
            choices: ["Engineer", "Intern"]
        },

        // internEngineer()
    ];

    
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, function(err){
            
            
        })
    };
    
    // function internEngineer(){
    //     let employeeType = employeeType.answers;
    //     if(employeeType === "Intern"){
    //         questions = [
    //             {
    //                 type: "input",
    //                 name: "school",
    //                 message: "What school does the Intern attend?"
    //             }
    
    //         ];
    //     }else if(employeeType === "Engineer"){
    //         questions = [{
    //             type: "input",
    //             name: "github",
    //             message: "What is the link to the Engineer's GitHub?"
    //         }];
    //     }
    // };
    function init() {
        console.log("yay");
        inquirer.prompt(questions).then(function(answers){
        
        
        let HTMLContent = `<h1>Team Roster</h1>

        
        
        
        
        
        
        
        
        
        `;
        writeToFile("../dist/renderedHTML.HTML", HTMLContent);
    })
    console.table(answers);
}

init();