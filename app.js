'use strict';

var express = require('express');
var path = require('path');
var moment = require('moment');

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/:timestamp', function(req, res){
   res.writeHead(200, { "Content-Type": "text/plain" });
   var timestamp = req.params.timestamp;
<<<<<<< HEAD
   console.log(timestamp);
=======
   console.log("timestamp:", timestamp);
>>>>>>> c2334b8b81f9fd992cbf00d44440f8992d4e97b0
   var result = {
     unix: null,
     natural: null
   };
   
   if (moment(timestamp, 'X', true).isValid()) {
<<<<<<< HEAD
       console.log('unix valid');
     result.unix = moment.unix(timestamp).format('X');
     result.natural = moment.unix(timestamp).format('MMMM D, YYYY');
   } else if (moment(timestamp, 'MMMM D, YYYY', true).isValid()) {
       console.log('natural valid');
=======
     result.unix = moment.unix(timestamp).format('X');
     result.natural = moment.unix(timestamp).format('MMMM D, YYYY');
   } else if (moment(timestamp, 'MMMM D, YYYY', true).isValid()) {
>>>>>>> c2334b8b81f9fd992cbf00d44440f8992d4e97b0
     result.unix = moment(timestamp).format('X');
     result.natural = moment(timestamp).format('MMMM D, YYYY');
   }
   res.end(JSON.stringify(result));
});

app.listen(port, function() {
	console.log("Listening on port", port);
});	