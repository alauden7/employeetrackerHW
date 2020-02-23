var inquirer   = require('inquirer');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rootroot',
  database : 'employee_trackerDB'
});
 
connection.connect();
 
connection.query('SELECT * FROM employee_trackerDB.department;', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

// connection.query("INSERT INTO `employee_trackerDB`.`department` (`id`, `name`) VALUES ('2', 'LEGAL');", function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
//   });
 
connection.end();


