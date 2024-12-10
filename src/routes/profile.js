var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {  
  if (req.session.user) {
    res.render('profile', { title: 'User Profile', user: req.session.user });
  } else {
    res.redirect('/');
  }
});

module.exports = router;  