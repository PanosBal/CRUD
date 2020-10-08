var mysql = require("mysql")

var con = mysql.createConnection({
  host: "localhost",
  user: "panos",
  password: "panos123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE company", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});