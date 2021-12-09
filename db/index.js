const connection = require('./connection.js')

class DB {
    constructor (connection){
        this.connection = connection
    }

    viewAllDepartments(){
        return this.connection.promise().query(
            
            `SELECT
                department.id, 
                department.name
            FROM 
                department`
            
            
        )
    }
    viewAllRoles(){
        return this.connection.promise().query(
            
            `SELECT
                role.id, 
                role.title,
                role.salary,
                department.name
            FROM 
                role
            LEFT JOIN
                department ON role.department_id = department.id`
            
            
        )
    }
    viewAllEmployees(){
        return this.connection.promise().query(
            
            `SELECT
                , 
                department.name
            FROM 
                department`
            
            
        )
    }

    addDepartment(department){
        return this.connection.promise().query(
            
            `INSERT INTO
                department
            SET
                ?`, department
            
            
        )
    }

    addRole(role){
        return this.connection.promise().query(
            
            `INSERT INTO
                role
            SET
                ?`, role
            
            
        )
    }






}

module.exports = new DB(connection)