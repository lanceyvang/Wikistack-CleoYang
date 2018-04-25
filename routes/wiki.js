const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){res.send('a')});

router.post('/', function(req, res, next){});

router.get('/add', function(req, res, next){});

module.export = router;


