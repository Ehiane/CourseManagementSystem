var express = require('express');
var router = express.Router();


const sessionChecker = (req, res, next) => {
  if(req.session.user){
    next()
  }
  else{
    res.redirect("/?msg=resource-access-fail")
  }
}
// using it as our middle to verify that only valid users can access those routes.
router.use(sessionChecker)

/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log(req.session.user)
  res.send('respond with a resource');
});

module.exports = router;
