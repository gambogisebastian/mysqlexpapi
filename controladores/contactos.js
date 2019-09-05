var Contacto = require("../modelos/contacto");

module.exports = {
  index
};

function index(req, res) {
  //console.log(Contacto.getAll);
  res.json(Contacto.getAll);
}
