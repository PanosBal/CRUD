var mysql = require('mysql')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'panos',
  password: 'panos123',
  database: 'company'
})


module.exports = con;