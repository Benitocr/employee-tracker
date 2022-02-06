SELECT employee.id, employee.first_name, employee.last_name, role.title, departament.name departament, role.salary, concat(employee.first_name,' ',employee.last_name) manager 
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN departament ON role.departament_id = departament.id



SELECT role.id, role.title, departament.name departament, role.salary
FROM role
LEFT JOIN departament ON role.departament_id = departament.id;

SELECT departament.id 
FROM departament
WHERE departament.name = ?;

SELECT concat(employee.first_name,' ', employee.last_name) FROM employee;

SELECT employee.id 
FROM employee
WHERE concat(employee.first_name,' ', employee.last_name) = 'Tom Allen';

SELECT role.id
from role
WHERE 
