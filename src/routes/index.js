var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Magic Auth' });
});

router.post("/", authController.authenticate);

module.exports = router;  
