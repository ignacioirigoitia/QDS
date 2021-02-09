var express = require('express');
var router = express.Router();
const { index } = require("../controllers/adminController");

router.get('/', index);

module.exports = router;
