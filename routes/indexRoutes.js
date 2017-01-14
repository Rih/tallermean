const express = require('express');
const controllers = require('.././controllers/indexControllers');
let router = express.Router();

//sintaxis con arrows
router.get('/', controllers.main.init);
router.post('/add',controllers.main.create);
router.get('/all',controllers.main.view);
module.exports = router;
