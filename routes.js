const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', controller.getDistros);

module.exports = router;
