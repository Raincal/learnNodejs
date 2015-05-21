/**
 * Created by raincal on 15/5/10.
 */
var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
    name: 'Raincal',
    email: 'cyj94228@gmail.com',
    address: 'Shanghai , China',
});

var options = {
    host: 'www.cyj228.com',
    path: '/application/node/post.php',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': contents.length
    }
}

var req = http.request(options, function (res) {
    res.setEncoding('utf-8');
    res.on('data', function (data) {
        console.log(data);
    });
});

req.write(contents);
req.end();