var express = require('express');
var router = express.Router();

var mongoCt=require('mongodb').MongoClient;

var respond = {};
router.post('/', function(req, res, next) {
    console.log(req.body,"333333");
    res.setHeader('Access-Control-Allow-Origin',req.headers.origin);
   var address='mongodb://127.0.0.1:27017/react';
   mongoCt.connect(address,function(err,db){
     if(err){
       console.log('databse error reg')
     }else{
       var reg = db.collection('reg');
       console.log(11111,2222222)
       reg.find({username:req.body.username,parssword:req.body.parssword}).toArray(function(err,result){
        if(result.length){
          respond.status = 0;
          respond.info = "登陆成功";
          req.session['username']=result[0].username;
        }else{
          respond.status = 1;
          respond.info = "登录失败";   
        }
        res.send(respond)
       });
     }
   })
 });
 
 module.exports = router;
 
 