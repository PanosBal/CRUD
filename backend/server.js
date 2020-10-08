var con=require('./connection_db'); 
var cors = require('cors'); 
var express = require('express');

bodyParser = require('body-parser');
var app = express();
app.use(cors());
app.listen(5000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes'); 
routes(app); 




