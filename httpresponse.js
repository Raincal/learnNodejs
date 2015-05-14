/**
 * Created by raincal on 15/5/10.
 */
var http = require('http');

var req = http.get({host:'www.cyj228.com'});
req.on('response',function(res){
    res.setEncoding('utf8');
    res.on('data',function(data){
        console.log(data);
    });
});