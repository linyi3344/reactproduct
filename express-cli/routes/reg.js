var express = require('express');
var router = express.Router();

// var mongoCt=require('mongodb').MongoClient;

// var respond = {};
router.get('/', function(req, res, next) {
    console.log("reg is running",req.body.username);


    // 兜库的操作用数据代替吧，否则换电脑就看不到效果了.看community
    // let data=[{"帅帅":"1314520"},{"小帅":"5201314"},{"大帅":"1314250"}];
    // data.map((item,index)=>{
    //   if(req.body.username==item[username]){
    //     res.send("用户名已存在")
    //   }else{
    //     res.send("用户名不存在");
    //   }

    // })
 });
 
 module.exports = router;
 
 