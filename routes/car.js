var express = require('express');
var router = express.Router();

var mongoCt=require('mongodb').MongoClient;

var respond = {};
router.post('/', function(req, res, next) {
  console.log(req.body,"alalalalalalt")
     res.setHeader('Access-Control-Allow-Origin',req.headers.origin);
   var address='mongodb://127.0.0.1:27017/react';
   mongoCt.connect(address,function(err,db){
     if(err){
       console.log('databse error car')
     }else{
       var car = db.collection('car');
       car.find({pid:req.body.pid}).toArray(function(err,result){
         console.log("17行输出的：",result)
        if(result.length){
            car.update({pid:req.body.pid},{$set:{count:parseInt(req.body.count)}},false,true)
        }else{
          car.save(req.body)
        }
  
       });
     }
    
   })
 });
 
 module.exports = router;
 