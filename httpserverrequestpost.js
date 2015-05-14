/**
 * Created by raincal on 15/5/10.
 */
var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req,res){
    var post = '';

    req.on('data',function(trunk){
        post += trunk;
    })

    req.on('end',function(){
        post = querystring.parse(post);
        res.end(util.inspect(post));
    })
}).listen(3000);