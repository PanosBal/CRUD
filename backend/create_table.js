var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "panos",
  password: "panos123",
  database: "company"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS employees (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), dob DATE, PRIMARY KEY(id))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
