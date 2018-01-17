var express = require('express');
var router = express.Router();

var mongoCt=require('mongodb').MongoClient;

var respond = {};
router.post('/', function(req, res, next) {
    console.log("reg页面",req.body);


    //兜库的操作用数据代替吧，否则换电脑就看不到效果了.
    let data=[{"帅帅":"1314520"},{"小帅":"5201314"},{"大帅":"1314250"}];
    data.map((item,index)=>{
      if(req.body.username==item[username]){
        res.send(data)
      }else{
        res.send(data);
      }

    })
    

  //  var address='mongodb://127.0.0.1:27017/react';
  //  mongoCt.connect(address,function(err,db){
  //    if(err){
  //      console.log('databse error reg')
  //    }else{
  //      var reg = db.collection('reg');
  //      console.log(11111,2222222)
  //      reg.find({username:req.body.username}).toArray(function(err,result){
  //       if(result.length){
  //         respond.status = 0;
  //         respond.info = "用户名已存在";
  //         req.session['username']=result[0].username;
  //       }else{
  //         reg.save(req.body)
  //         respond.status = 1;
  //         respond.info = "注册成功";   
  //       }
  //       res.send(respond)
  //      });
  //    }
  //  })
 });
 
 module.exports = router;
 
 