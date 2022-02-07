SELECT employee.id, employee.first_name, employee.last_name, role.title, departament.name departament, role.salary, e2.* as manager
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN departament ON role.departament_id = departament.id
LEFT JOIN (SELECT id, concat(employee.first_name,' ',employee.last_name) aname FROM employee) e2 on employee.manager_id = e2.id;

concat(employee.first_name,' ',employee.last_name) manager


    select * from employee
    left join (SELECT id, concat(employee.first_name,' ',employee.last_name) as name FROM employee) e2 on employee.manager_id = e2.id
    ;

SELECT id, concat(employee.first_name,' ',employee.last_name) as name FROM employee e2 on employee.manager_id = e2.id

SELECT employee.manager_id = concat

select employee.* from employee
left join (SELECT id, concat(employee.first_name,' ',employee.last_name) as name FROM employee) e2 on employee.manager_id = e2.id
;



select employee.id, employee.first_name, employee.last_name, role.title, departament.name departament, employee.manager_id as manager from employee
left join (SELECT id, concat(employee.first_name,' ',employee.last_name) aname FROM employee) e2 on employee.manager_id = e2.id
LEFT JOIN departament ON role.departament_id = departament.id


SELECT role.id, role.title, departament.name departament, role.salary
FROM employee
LEFT JOIN departament ON role.departament_id = departament.id
LEFT JOIN role ON employee.role_id = role.id;

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




SELECT employee.id, employee.first_name, employee.last_name, role.title, departament.name departament, role.salary, concat(m.first_name,' ',m.last_name) manager
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN departament ON role.departament_id = departament.id
left join employee as m on m.id  = employee.manager_id

SELECT employee.id, employee.first_name, employee.last_name, role.title, departament.name departament, role.salary, concat(m.first_name,' ',m.last_name) manager
    -> FROM employee
    -> LEFT JOIN role ON employee.role_id = role.id
    -> LEFT JOIN departament ON role.departament_id = departament.id
    -> inner join employee as m on employee.manager_id = m.id;
