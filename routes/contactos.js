var express = require("express");
var router = express.Router();
var contactosCtrl = require("../controladores/contactos");

/* GET contactos listing. */
router.get("/", contactosCtrl.index);

module.exports = router;
