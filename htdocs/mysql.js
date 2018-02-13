var mysql       = require('mysql');
var connection  = mysql.createConnection({
    host    : 'localhost',
    user    : '',
    password: '',
    database: 'rednaxela'
});

connection.connect();

connection.query('Select * from movie', funciton(err, rows, fields){
    if(!err)
        console.log('The solution is: ', rows);
    else
        console.log('Error while performing query.');
});

connection.end();