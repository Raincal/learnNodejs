/**
 * Created by raincal on 15/5/11.
 */
var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(req,res){
    var post = '';

    req.on('data',function(trunk){
        post += trunk;
    })
    req.on('end',function(){
        post = querystring.parse(post);

        res.setEncoding('utf-8');
        res.write(post.title);
        res.write(post.text);
        res.end();
    })
}).listen(3000);