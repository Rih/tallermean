const express = require('express');
const controllers = require('.././controllers');
let router = express.Router();

//sintaxis con arrows
router.get('/', controllers.main.init);

module.exports = router;
