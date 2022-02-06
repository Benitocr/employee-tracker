const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');
// const Query = require('./db/queries');

let sql; 
let params;   
const menu = () => {
    

    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do? ',
            choices: ['View all departments','View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role','Exit' ],
            default: '1'
        }
    ]);
}

function askDepartment(){
    return inquirer.prompt([
        {
            type: 'input',
                name: 'departamentName',
                message: 'Please enter the name of the department',
                validate: nameInput => {
                    if(nameInput){
                        return true
                    } else{
                        console.log('Please enter a department name!');
                        return false;
                    }
                }
        }
    ]);

}

function askRole(options){
    
    return inquirer.prompt([
        {
            type: 'input',
            name:'name',
            message: 'What is the Name of the role?',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else{
                    console.log('Please enter a name of a role!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'salary',
            message: 'What is the salary of the role?',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else{
                    console.log('Please enter a salary !');
                    return false;
                }
            }

        },
        {
            type: 'list',
            name: 'roles',
            message: 'Which department does the role belong to? ',
            choices: options,
            default: '1'
        }
    ]);


}
function addRole(){
    sql = `SELECT name FROM departament;`;
    //query to obtain the departament list
    db.promise().query(sql)
        .then(([rows,fields]) => {
                
                //calling fuction to collect the information to add a role
                askRole(rows)
                    .then(answears=>{
                        console.log(answears);
                        sql = `SELECT departament.id 
                                FROM departament
                                WHERE departament.name = ?;`;
                        params = answears.roles;
                        //query to obtain the id of the department
                        db.query(sql, params, (err, result) => {
                                        if(err){
                                            console.log('error in quering department');
                                            return;
                                        }
                                        console.log(result[0].id);
                                        sql = `INSERT INTO role (title, salary, departament_id) VALUES (?,?,?);`;
                                        params = [answears.name, answears.salary, result[0].id];                                        
                                        //query to insert the role
                                        db.query(sql, params, (err, result) => {
                                            if(err){
                                                console.log('error in INSERTING ROLE');
                                                console.log(err);
                                                return;
                                            }
                                            console.log('Added '+ answears.name + ' to role');
                                            //calling init function to return to main menu
                                            init();
                                           
                                        });
                                       
                                    });
                        

                        
                    }

                );
                

            })
            .catch(console.log)
            // .then( () => db.end())
                    
    
    
                       
}

function wellcome(){
    console.log(",---------------------------------------------------.");
    console.log("|                                                   |");
    console.log("|   _____                 _                         |");
    console.log("|  | ____|_ __ ___  _ __ | | ___  _   _  ___  ___   |");
    console.log("|  |  _| | '_ ` _ \\| '_ \\| |/ _ \\| | | |/ _ \\/ _ \\  |");
    console.log("|  | |___| | | | | | | ) | | ( ) | |_| |  __/  __/  |");
    console.log("|  |_____|_| |_| |_| . _/|_|\\___/ \\__, |\\___|\\___|  |");
    console.log("|                  |_|            |___/             |");
    console.log("|   __  __                                          |");
    console.log("|  |  \\/  | __ _ _ __   __ _  __ _  ___ _ __        |");
    console.log("|  | |\\/| |/ _' | '_ \\ / _` |/ _` |/ _ \\ '__|       |");
    console.log("|  | |  | | ( | | | | | ( | | ( | |  __/ |          |");
    console.log("|  |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|          |");
    console.log("|                            |___/                  |");
    console.log("|                                                   |");
    console.log("`---------------------------------------------------'");
}



function init(){
   
    menu()
        .then ( answears => {
                switch(answears.menu){
                case 'View all departments':
                    sql = `SELECT * FROM departament;`;

                    db.query(sql, (err, rows) => {
                        if(err){
                            console.log('error in view all departments')
                            return;
                        }
                    console.table(rows);             
                    init();

                    });
                    
                break;
                case 'View all roles':                    
                    const sql1 = `SELECT role.id, role.title, departament.name departament, role.salary
                                    FROM role
                                    LEFT JOIN departament ON role.departament_id = departament.id;`;

                    db.query(sql1, (err, rows) => {
                        if(err){
                            console.log('error in view all roles')
                            return;
                        }
                        console.table(rows);
                        init();
                    });
                break;
                case 'View all employees':
                    console.log('codigo para mostrar los empleados');
                        sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, departament.name departament, role.salary, concat(employee.first_name,' ',employee.last_name) manager
                                    FROM employee
                                    LEFT JOIN role ON employee.role_id = role.id
                                    LEFT JOIN departament ON role.departament_id = departament.id;`;

                        db.query(sql, (err, rows) => {
                            if(err){
                                console.log('error in view all employees')
                                return;
                            }
                        console.table(rows);
                        
                    init();
                    });


                break;
                case 'Add a department':
                    askDepartment()
                        .then(answears=>{                            
                            sql = `INSERT INTO departament (name)
                                            VALUES(?);`;
                            params = answears.departamentName;

                            db.query(sql, params, (err, result) => {
                                if(err){
                                    console.log('error in add department')
                                    return;
                                }
                                console.log('Departament '+ answears.departamentName + ' Added to the database');
                                init();
                            });


                        });
                break;
                case 'Add a role':
                    console.log('codigo para agregar un rol');
                    addRole()
                        // .then(answears=>{
                        //     console.log ('nose' + answears);
                        // });
                break;
                case 'Add an employee':
                    console.log('codigo para agregar un empleado');
                break;
                case 'Update an employee role':
                    console.log('codigo para mofigicar un empleado');
                break;
                default:
                    console.log('Good bye');
                // break;
            }
        });
    
    
}
wellcome();
init();