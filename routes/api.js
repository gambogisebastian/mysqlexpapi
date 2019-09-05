var express = require("express");
var router = express.Router();
var contactCtrl = require("../controladores/api/contact");

/* GET contactos listing. */
router.get("/contact", contactCtrl.index);

module.exports = router;
