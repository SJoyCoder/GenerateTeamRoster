const inquirer = require("inquirer");
const fs = require('fs');

const employeeInput = [
    {
        type: "input",
        name: "name",
        message: "Please input employee's name."
    },
    {
        type: "input",
        name: "id",
        message: "Please input employee's Id number."
    },
    {
        type: "input",
        name: "email",
        message: "Please input employee's email."
    }
]