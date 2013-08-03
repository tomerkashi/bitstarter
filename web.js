var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  console.log("got request")
  var buffer  = fs.readFileSync("index.html")
  response.send(buffer.toString());
});

app.get('/keyboard.jpg', function(request, response) {
  console.log("got key")
  var buffer  = fs.readFileSync("keyboard.jpg")
  response.send(buffer);
});

app.get('/fast_signup.jpg', function(request, response) {
  console.log("got key")
  var buffer  = fs.readFileSync("fast_signup.jpg")
  response.send(buffer);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
