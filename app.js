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
   console.log(timestamp);
   var result = {
     unix: null,
     natural: null
   };
   
   if (moment(timestamp, 'X').isValid()) {
     result.unix = moment.unix(timestamp).format('X');
     result.natural = moment.unix(timestamp).format('MMMM D, YYYY');
   } else if (moment(timestamp, 'MMMM D, YYYY').isValid()) {
     result.unix = moment(timestamp).format('X');
     result.natural = moment(timestamp).format('MMMM D, YYYY');
   }
   res.end(JSON.stringify(result));
});

app.listen(port, function() {
	console.log("Listening on port", port);
});	