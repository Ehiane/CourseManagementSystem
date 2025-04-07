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
  res.render('courses');
});

router.post('/create', function(req,res,next){
  console.log(req.body.courseid)
  console.log(req.body.coursename)
  res.redirect('/courses')
});

module.exports = router;
