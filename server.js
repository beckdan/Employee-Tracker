const db = require('./db')
require('console.table')
const inquirer = require('inquirer')

function mainMenu(){
    inquirer.prompt([
        {
            type: 'list', 
            name: 'selection',
            message: "What would you like to do?",
            choices: [
                'View All Departments', 
                'View All Roles',
                'Add Department',
                'Add Role'
            ]
        }
    ])
    .then(res => {
        switch(res.selection){
            case 'View All Departments':
                return showAllDepartments();
            case 'View All Roles':
                return showAllRoles();
            case 'Add Department':
                return addDepartment();
            case 'Add Role':
                return addRole();
        }
    })
}

function showAllDepartments(){
    db.viewAllDepartments()
        .then(([rows])=>{
            console.log('\n')
            console.table(rows)
            console.log('\n')
        })
    mainMenu();
}

function showAllRoles(){
    db.viewAllRoles()
        .then(([rows])=>{
            console.log('\n')
            console.table(rows)
            console.log('\n')
        })
    mainMenu();
}

function addDepartment(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What would you like to name the department?"
        }
    ])
    .then(res=>{
        db.addDepartment(res)
        .then(()=>console.log(`We added ${res.name} department`))
        .then(() => mainMenu());
    })
}

function addRole(){
    db.viewAllDepartments()
    .then(([rows]) => {
     const departmentChoices = rows.map(({ id, name }) => ({
        name: name,
        value: id
      }));
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the title of the role?"
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for this role?'
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'What department is this role going to be a part of?',
                choices: departmentChoices    
        }
    ])
    .then(res=>{
        db.addRole(res)
        .then(()=>console.log(`We added ${res.title} department`))
        .then(() => mainMenu());
    })
})
}

function addEmployee(){
    db.viewAllRoles()
    .then(([rows]) => {
     const roleChoices = rows.map(({ first_name, name }) => ({
        name: name,
        value: id
      }));
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What is the employee's first name?"
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What is the employee's last name?"
        },
        {
            type: 'list',
            name: 'role_id',
            message: "What is the employee's role?",
                choices: roleChoices
        }
    ])
    .then(res=>{
        db.addEmployee(res)
        .then(()=>console.log(`We added ${res.name} department`))
        .then(() => mainMenu());
    })
}

mainMenu();