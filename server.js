//step1
var express = require('express');
var app = express();
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var dateBaseURL = 'mongodb://localhost:27017/bucketlist';
//step2
app.use( bodyParser.json() );

//step3
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.get('/countries', function(req, res){
  // console.log("route working")
  MongoClient.connect(dateBaseURL, function(err, db){
    if(err){
      console.log(err);
      return;
    }
    var collection = db.collection("countries")
    collection.find({}).toArray(function(err, docs){
      res.json(docs);
      db.close;
    })
  })

});







app.use(express.static('client/build'));
//explain further step4
  var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;




  console.log('Example app listening at http://%s:%s', host, port);
});

 


