var chalk = require('chalk');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'burgers_db'
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