var sql = require("./connection_db");

var Employee = function(employee){
    this.name = employee.name;
    this.dob = employee.dob;
};

Employee.createEmployee = function (newEmployee, result) {    
        sql.query("INSERT INTO employees set ?", newEmployee, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};

Employee.getEmployee = function (result) {
        sql.query("Select * from employees", function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log("employees : ", res); 
                 result(null, res);
                }
            });   
};

Employee.updateById = function(id, employee, result){
  sql.query("UPDATE employees SET name = ?, dob = ? WHERE id = ?", [employee.name,employee.dob, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};

Employee.remove = function(id, result){
     sql.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{              
                 result(null, res);
                }
            }); 
};

module.exports= Employee;