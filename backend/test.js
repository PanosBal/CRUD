var sql = require("./connection_db");


  sql.query("SELECT @@global.time_zone,@@session.time_zone", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
