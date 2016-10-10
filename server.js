// view on https://fcc-challenges-laurabrandt.c9users.io/

var express = require('express');
var moment = require('moment');

var app = express();

function getDates(input) {
  var date = new Date(input);
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  var timeString = monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
  return [date.getTime(), timeString];  // unix time, "MMMM DD, YYYY"
}

app.use(function(request, response) {
  var timestamp = request.url.slice(1).replace(/%20/g, " ");
  console.log("string:", timestamp);
  if (moment(timestamp, "X", true).isValid()) { // unix timestamp
    var dates = getDates(Number(timestamp));
  }
  else if (moment(timestamp, "MMMM D, YYYY", true).isValid()) { // date string 
    var dates = getDates(timestamp); 
  }
  
  var json = {"unix": null, "natural": null};
  if (typeof dates !== 'undefined') {
    json.unix = dates[0];
    json.natural = dates[1];
  }

  response.end(JSON.stringify(json));
});

app.listen(process.env.PORT);