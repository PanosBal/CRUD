var Employee = require("./model.js");

exports.read =  function(req, res) {
   Employee.getEmployee(async function(err, employee) {
    if (err)
      res.send(err);
      console.log("res", employee);
     await res.send(employee);
  });
};

exports.create= function(req, res) { 
  var employee = {
    name: req.body.name,
    dob: req.body.dob
    };
    Employee.createEmployee(employee, function(err, employee) {
      if(err) {
          res.json({
              error : err
          })
      }
      res.json({
          message : "Employee created successfully"
        })
    })
  }


exports.update = function(req, res) {
  Employee.updateById(req.params.employeeId, new Employee(req.body), function(err, employee) {
    if (err)
      res.send(err);
    res.json({message: "Employee successfully updated"});
  });
};


exports.delete = function(req, res) {
  Employee.remove( req.params.employeeId, function(err, employee) {
    if (err)
      res.send(err);
    res.json({ message: "Employee successfully deleted" });
  });
};