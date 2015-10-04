var express = require('express');
var Parse = require('parse').Parse;

Parse.initialize('f6l2pZcEvoOFI1O1mvueXd3Wz0bijxEg17qFmvsm', 'ARg0szrf8zBLgP0zdvW8Q3JFS5qo9DDuwt5pCnw3');



var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/user/', function (req, res) {
	// body...
	var query = new Parse.Query(Parse.User);
	query.find({
	  success: function(users) {
	    for (var i = 0; i < users.length; ++i) {
	      console.log(users[i].get('username'));
	    }
	  }
	});

	res.send(query);

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});