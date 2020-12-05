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
    password: "password",
    database: "employeeTracker_db"
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
                    addEmployee();
                    break;

                case "Remove Employee":
                    removeEmployee();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;

                case "Remove Employee Manager":
                    removeEmployeeManager();
                    break;

                case "View All Roles":
                    viewAllRoles();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Remove Role":
                    removeRole();
                    break;

                case "View All Departments":
                    viewAllDepartments();
                    break;

                case "Add Department":
                    addDepartment();
                    break;

                case "Remove Department":
                    removeDepartment();
                    break;

                case "Quit":
                    quit();
                    break;
            }
        });
}

//there are 4 deparments. Sales, Engineering, Finance and Legal
function viewAllEmployees() {
    connection.query("select E1.first_name, E1.last_name, role.title, role.salary, department.name, E2.first_name as manager from employee E1 LEFT JOIN role on E1.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee E2 on E2.id = E1.manager_id", function(err, res){
        if (err) throw err;
        console.table(res);
        runSearch();
    })
}

function viewAllEmployeesbyDepartment() {
    inquirer.prompt({
        type:"input",
        name:"employeeByDepartment",
        message:"What is the Department you will be looking for?"
    })
}

// function viewAllEmployeesbyManager() {
//     inquirer.prompt()
// }

function addEmployee() {
    inquirer.prompt(
        {
            type:"input",
            name:"firstName",
            message: "What is the first name of the Employee?"
        },
        {
            type:"input",
            name:"lastName",
            message: "What is the last name of the Employee?"
        },
        {
            type: "list",
            name: "roleId",
            message: "What is your role id of the employee? Role 01 is Sales Lead, 02 is Salesperson, 03 is Lead Engineer, 04 is Software Engineer, 05 is Account Manager, 06 is an Accountant, 07 is Legal Team Lead, 08 is Lawyer",
            choices: [
                01,
                02,
                03,
                04,
                05,
                06,
                07,
                08,
            ]
        },
        // {
        //     type: "list",
        //     name: "department",
        //     message: "Please select Department",
        //     choices:[
        //         "Sales",
        //         "Engineering",
        //         "Finance",
        //         "Legal"
        //     ]
        // },
        {
            type: "input",
            name: "managerId",
            choices: "Please enter manager id"
        }
    ).then(function(answer){
        connection.query("Insert into table ?",
        {
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: answer.roleId,
            manager_id: answer.managerId
        },
        function(err) {
            if (err) throw err;
            console.log("Employee was Added")
        }
        )
    })
}

// function removeEmployee() {
//     inquirer.prompt()
// }

function updateEmployeeRole() {
    inquirer.prompt()
}

function removeEmployeeManager() {
    inquirer.prompt()
}

function viewAllRoles() {
    connection.query("select role.title, role.salary, department.name from role inner JOIN department on role.department_id = department.id", function(err, res){
        if (err) throw err;
        console.table(res);
        runSearch();
    });
}

function addRole() {
    inquirer.prompt()
}

// function removeRole() {
//     inquirer.prompt()
// }

function viewAllDepartments() {
    connection.query("select name from department", function(err, res){
        if (err) throw err;
        console.table(res);
        runSearch();
    });
}

function addDepartment() {
    inquirer.prompt()
}

// function removeDepartment() {
//     inquirer.prompt()
// }
//do i need this quit function?
function quit() {
    inquirer.prompt()
}

