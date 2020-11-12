var mysql = require('mysql');


module.exports.dbConnection = mysql.createConnection({
  user: 'root',
  database: 'tripAdvisor'
});

