var express = require('express');
var router = express.Router();
const { index } = require("../controllers/productsController");

router.get('/', index);

module.exports = router;