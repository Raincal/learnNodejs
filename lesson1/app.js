var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Hello, Nodejs!')
})
app.listen(3000, function(){
	console.log('app is listening in port 3000');
})