var express = require('express');
var  utility = require('utility');
var app = express();

app.get('/', function(req, res){
	var q = req.query.q;
	var md5Value = utility.md5(q);
	// var sha1Value = utility.sha1(q);
	res.send(md5Value);
	// res.send(sha1Value);
	
})
app.listen(3000, function(){
	console.log('app is listening in port 3000');
})