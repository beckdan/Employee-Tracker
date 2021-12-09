use employee_db;

INSERT INTO department
    (name)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal');
    ('Sales');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 90000, 2),
    ('Lead Engineer', 150000, 1),
    ('Junior Developer', 120000, 2),
    ('Account Manager', 200000, 1),
    ('Accountant', 120000, 2),
    ('Legal Team Lead', 200000, 1),
    ('Lawyer', 150000, 2),
   
    

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)

VALUES  
    ('Dwight', 'Schrute', 1, NULL),
    ('Jim', 'Halpert', 2, 1),
    ('George', 'Targaryen', 3, 1),
    ('Tywin', 'Lannister', 4, NULL),
    ('Joanna', 'Lannister', 5, 4),
    ('Jamie', 'Lannister', 6, 4),
    ('Ed', 'Stark', 7, NULL),
    ('Sansa', 'Stark', 8, 7),
    ('Jon', 'Snow', 9, 7);
