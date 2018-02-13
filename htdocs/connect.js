var mysql       = require('mysql');
var connection  = mysql.createConnection({
    host    : 'mysqlcluster3.registeredsite.com',
    user    : 'aromito7',
    password: 'P-chan27',
    database: 'rednaxela'
});

connection.connect();

connection.query('Select * from movie', function(err, rows, fields){
    if(!err)
        console.log('The solution is: ', rows);
    else
        console.log('Error while performing Query.');
});

connection.end();