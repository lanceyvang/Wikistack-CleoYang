const wiki = require('./wiki.js');
const user = require('./user.js');
const express = require('express');
const router = express.Router();

router.use('/wiki', wiki);
router.use('/user', user);

module.exports = router;