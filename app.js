var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const sequelize = require('./db')

var indexRouter = require('./routes/index');
var coursesRouter = require('./routes/courses');
const User = require('./models/User');
const Course = require('./models/Course');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// adding session
app.set('trust proxy', 1)
app.use(session({
  secret: 'wsu489',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}))

app.use('/', indexRouter);
app.use('/courses', coursesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

async function setup() {
  const subu = await User.create({username: "subu", password: "1234"});
  console.log("Subu instance created");
  const webdev = await Course.create(
    {
      courseid: "CPTS 489",
      coursename: "Web Development",
      semester: "Spring",
      coursedesc: "Introduction to Web Development",
      enrollnum: 80
    })
}

// forces a creation of the db if it doesn't exist
// You dont want to do that in production.
sequelize.sync({force: true}).then(()=>{
  console.log("Sequelize Sync Completed...");
  setup().then(()=> console.log("User setup complete"));
})



module.exports = app;
