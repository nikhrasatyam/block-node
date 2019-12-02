const router = require('express').Router();
const controller = require('./block.controller');

router.get('/', controller.list);

module.exports = router;
