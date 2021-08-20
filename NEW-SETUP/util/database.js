const mysql = require('mysql2');

const pool = mysql.createPool({
host: 'localhost',
user: 'root',
database: 'wfabric',
password: 'atul'
});

module.exports = pool.promise();
// mysql://master:Wfabric890@dev-freespacedb.cdle0foiowgw.eu-west-1.rds.amazonaws.com:3306/wfabric'