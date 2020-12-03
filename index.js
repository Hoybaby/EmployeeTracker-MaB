const inquirer = require('inquirer');
const mysql = require('mysql');
const fs = require('fs');

//need to make a connection from previous activities.

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "top_songsDB"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees By Department",
                "View All Employees by Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Remove Employee Manager",
                "View All Roles",
                "Add Role",
                "Remove Role",
                "View All Departments",
                "Add Department",
                "Remove Department",
                "Quit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View All Employees":
                    viewAllEmployees();
                    break;

                case "View All Employees By Department":
                    viewAllEmployeesbyDepartment();
                    break;

                case "View All Employees by Manager":
                    viewAllEmployeesbyManager();
                    break;

                case "Add Employee":
                    AddEmployee();
                    break;

                case "Remove Employee":
                    removeEmployee();
                    break;
                case "Update Employee Role":
                    removeEmployee();
                    break;

                case "Remove Employee Manager":
                    removeEmployee();
                    break;

                case "View All Roles":
                    removeEmployee();
                    break;

                case "Add Role":
                    removeEmployee();
                    break;

                case "Remove Role":
                    removeEmployee();
                    break;

                case "View All Departments":
                    removeEmployee();
                    break;

                case "Add Department":
                    removeEmployee();
                    break;

                case "Remove Department":
                    removeEmployee();
                    break;

                case "Quit":
                    removeEmployee();
                    break;
            }
        });
}
