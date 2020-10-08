var Employee = require('./model.js');

module.exports = function(app) {
  var fromControl = require('./controller');

  app.get('/employees',(fromControl.read))
  app.get("/delete/:employeeId",(fromControl.delete)); 
  app.post("/create",(fromControl.create));
  app.put("/update/:employeeId",(fromControl.update));

    
  };

    