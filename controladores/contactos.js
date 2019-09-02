//var Contacto = require("../modelos/contacto");

var ContactoConn = require("../modelos/database");

module.exports = {
  index
};

function index(req, res) {
  ContactoConn.query("SELECT * FROM contactos", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
}
