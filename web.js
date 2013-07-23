var express = require('express');
var fs = require('fs');
var file = "index.html";
var content;
fs.readFileSync(file,function(err,data){
if(err){
    throw err;
}
content=buf.toString('utf8',0,data);
});

var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
