USE employeeTracker_db;

INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Finance");
INSERT INTO department (name) VALUES ("Engineering");
INSERT INTO department (name) VALUES ("Legal");


INSERT INTO role (title, salary, department_id) VALUES ("Salesperson", 10000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Lead Engineer", 75000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Software Engineer", 85000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Account Manager", 65000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Accoutant", 55000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Legal Team Lead", 65000, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Lawyer", 75000, 4);




