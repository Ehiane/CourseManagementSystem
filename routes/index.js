var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  console.log(req.body.username + " - " + req.body.password)
  res.redirect("/courses"); // redirects to the courses page
});


module.exports = router;
