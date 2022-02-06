SELECT employee.id, employee.first_name, employee.last_name, role.title, departament.name departament, role.salary, concat(employee.first_name,' ',employee.last_name) manager ON 
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN departament ON role.departament_id = departament.id



SELECT role.id, role.title, departament.name departament, role.salary
FROM role
LEFT JOIN departament ON role.departament_id = departament.id;