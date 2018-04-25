const wiki = require('./wiki.js');
const user = require('./user.js');
const express = require('express');
const router = express.Router();

router.use('/wiki', wiki);
// router.use('/user', user);

router.get("/", (req, res, next) => {
  res.send("this is the home page");
  next();
});

module.exports = router;