var express = require('express');
const User = require('../models/User');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', async function(req, res, next) {
  // console.log(req.body.username + " - " + req.body.password)
  const user = await User.findUser(req.body.username, req.body.password);

  if(user !== null){
    // adding user session
    req.session.user = user
    res.redirect("/courses"); // redirects to the courses page
  }
  else {
    res.redirect("/?msg=fail") // redirect to the root page with a fail message
  }
});


module.exports = router;
