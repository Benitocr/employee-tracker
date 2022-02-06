const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');
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
                    const sql = `SELECT * FROM departament;`;

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
                    console.log('codigo para mostrar los roles');
                    const sql1 = `SELECT *
                                FROM role;`;

                    db.query(sql1, (err, rows) => {
                        if(err){
                            console.log('error in view all departments')
                            return;
                        }
                    console.table(rows);
                    init();
                    });
                break;
                case 'View all employees':
                    console.log('codigo para mostrar los empleados');
                break;
                case 'Add a department':
                    console.log('codigo para agregar un departamento');
                break;
                case 'Add a role':
                    console.log('codigo para agregar un rol');
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