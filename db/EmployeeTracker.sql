CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

create table employee
(
    id int not null auto_increment primary key,
    first_name varchar(30),
    last_name varchar(30),
    role_id int,
    manager_id int,
    FOREIGN KEY (role_id) REFERENCES role(id)
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);


create table role
(
    id int not null auto_increment primary key,
    title varchar(30),
    salary decimal (12,2),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);


create table department
(
    id int not null auto_increment primary key,
    name varchar(30)

);