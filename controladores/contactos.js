var Contacto = require('../modelos/contacto');

module.exports = {
    index
};


function index (req, res) {
    res.json('proximamente se consultará a la base de datos para poder responder con el recurso solicitado'); //ver como organizar las conexiones mysql
};