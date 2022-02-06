const db = require('./connection');
const cTable = require('console.table');

function Query(){

}


Query.prototype.queryDepartment = function(){
    const sql = `SELECT * FROM departament;`;

    db.query(sql, (err, rows) => {
        if(err){
            console.log('error in view all departments')
            return;
        }
    // 
    return rows;
    });
}

module.exports = Query();