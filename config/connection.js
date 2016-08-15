var chalk = require('chalk');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'apenachi',
  password : '********',
  database : 'db4free.net:3306/burgers_db' //'burgers_db'
});

connection.connect(function(err) {
  if(err) {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log(chalk.black.bgGreen.bold('Succesfully Connected to Database') + ' burgers_db');
});
// module.exports.connection = connection;
module.exports = connection;