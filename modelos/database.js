var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

connection.connect((err) => {
    if (!err)
        console.log('conexion exitosa a ...');
    else
        console.log('Error de conexión a la base de datos \n Error: ' + JSON.stringify(err, undefined, 2));
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();