var mysql = require('mysql');


module.exports.db = mysql.createConnection({
  user: 'root',
  database: 'tripAdvisor'
});




