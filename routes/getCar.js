var express = require('express');
var router = express.Router();

var mongoCt=require('mongodb').MongoClient;

router.get('/', function(req, res, next) {
     res.setHeader('Access-Control-Allow-Origin',req.headers.origin);
   var address='mongodb://127.0.0.1:27017/react';
   mongoCt.connect(address,function(err,db){
     if(err){
       console.log('databse error car')
     }else{
       var car = db.collection('car');
       car.find({}).toArray(function(err,result){
            res.send(result)
       });
     }
   })
 });
 
 module.exports = router;
 