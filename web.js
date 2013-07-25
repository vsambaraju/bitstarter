var express = require('express');
var fs = require('fs');
var infile = "index.html";
var content;
var buf = new Buffer(256);
buf = fs.readFileSync(infile);
content=buf.toString();


var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
