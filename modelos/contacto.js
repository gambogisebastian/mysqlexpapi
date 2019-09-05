var mysql = require("mysql");
var conn = require("../config/database");

function getAll() {
  conn.query("SELECT * FROM contactos", function(err, row, fields) {
    if (!err) {
      //console.log(row);
      return row;
    } else {
      console.log(err, fields);
    }
  });
}

module.exports = {
  getAll
};
