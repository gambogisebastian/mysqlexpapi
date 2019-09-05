var mysql = require("mysql");

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "6545", //12345678
  database: "test"
});

conn.connect(err => {
  if (!err) console.log("conexion exitosa a la base de datos");
  else
    console.log(
      "Error de conexión a la base de datos \n Error: " +
        JSON.stringify(err, undefined, 2)
    );
});

module.exports = conn;
