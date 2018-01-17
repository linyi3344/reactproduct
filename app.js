var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var cors = require('cors');





var index = require('./routes/index');
// var Detail = require('./routes/Detail');
// var list = require('./routes/list');
var reg = require('./routes/reg');
// var sign = require('./routes/sign');
// var car = require('./routes/car');
// var getCar = require('./routes/getCar');
// var sign = require('./routes/sign');

var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  "origin": ["http://localhost:3001","http://localhost:5000","http://localhost:8001","http://localhost:8080"],  //允许所有前端域名
  "credentials":true,
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));



// let arrKeys=[];
// for(var i=0;i<99999;i++){
//   arrKeys.push('aa'+Math.random());
// }
app.use(cookieSession({
  keys:["aa","bb","cc","dd","ee","ff"],
  
}));






app.use('/', index);
// app.use('/Detail', Detail);
// app.use('/list', list);
app.use('/reg', reg);
// app.use('/sign', sign);
// app.use('/car', car);
// app.use('/getCar',getCar);
// app.use('/sign',sign);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
