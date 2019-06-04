var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var bluebird = require('bluebird'); // 몽구스 poromise에 사용
//var User = require('./models/NomalUser') // test용 데이터 베이스 코드

var indexRouter = require('./routes')

var app = express();
const sess = {
  resave: false,
  saveUninitialized: false,
  secret: '@#@$MYSIGN#@$#$',
  cookie: {
    httpOnly: true,
    secure: false,
  },
}
 
mongoose.connect('mongodb://localhost/admin', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

app.use('/', indexRouter);

/* database setting test section - start */
/*
var user = new User({
  email: 'rladyd818@live.co.kr',
  password: '12345',
  confirm: 'ok',
  nickname: 'tested',
  agreement: 1
});
user.save(function(err){
  if(err) {
      console.log(err);
      console.log('실패!');
      return;
  }
  });
  */
/* database setting test section - end */

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

module.exports = app;
