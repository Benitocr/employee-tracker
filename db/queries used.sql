SELECT employee.id, employee.first_name, employee.last_name, role.title, departament.name departament, role.salary, concat(employee.first_name,' ',employee.last_name) manager
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN departament ON role.departament_id = departament.id;


SELECT role.id, role.title, role.departament_id, role.salary
FROM role
LEFT JOIN departament ON role.departament_id = departament.name;