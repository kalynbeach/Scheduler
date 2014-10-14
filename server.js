// Localhost server for testing

var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/less'));

app.get('/', function(req, res) {
  res.redirect('/index.html');
});

app.listen(8080, function() {
	console.log('Listening on port 8080');
});