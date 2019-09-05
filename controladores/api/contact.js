//var Contact = require("../../modelos/contacto");
var conn = require("../../config/database");

module.exports = {
  index
};

function index(req, res) {
  conn.query("SELECT * FROM contactos", function(err, rows) {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err);
    }
  });
}
