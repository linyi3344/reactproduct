//cors是引入的，其他脚手架自带的。
var cors = require('cors');
var path = require('path');
var logger = require('morgan');
var express = require('express');
var reg = require('./routes/reg');
var login = require('./routes/login');
var users = require('./routes/users');
var index = require('./routes/index');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var community = require('./routes/community');

var app = express();//搭建express的web服务

// 渲染引擎的设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//配置中间件
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//静态页面托管，指向public
//可以在这里开启mongodb
//cors配置
app.use(cors({
  "origin":["http://localhost:8001","http://localhost:8080"], //允许所有前端域名
  "credentials":true,
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));
//做响应
app.use('/', index);
app.use('/reg', reg);
app.use('/login', login);
app.use('/users', users);
app.use('/community', community);


// 处理错误的接口请求
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
//到处app给www使用
module.exports = app;
