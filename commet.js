var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'content': 'Nodejs基础很重要！',
	'cid': 348
});

var options = {
	hostname: 'www.imooc.com',
	port: 80,
	method: 'POST',
	path: '/course/docomment',
	headers: {
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
		'Connection':'keep-alive',
		'Content-Length':'62',
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=54149791-d7b0-44fe-8d34-1492395bab79; PHPSESSID=g0mjg958sda764t97cdbj7k245; loginstate=1; apsid=c0ZjM2MWQ5ZTk3YTBmYjUzMGRkZmYyZGE2NTgzOTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMwNzg3MTc4NzkAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDM5ODI5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABjeWoyMjhAdmlwLnFxLmNvbQAAAAAAAAAAAAAAAAAAADljMTBlNTYyY2YwOGEyNGNkMGU2YmRlYTBlYjY4MzEyr3E5VKraPFU%3DMj; cvde=55b8db464a857-4; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1437366015,1438178125; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1438178134',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/comment/348',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}

var req = http.request(options, function(res){
	console.log('Status: ' + res.statusCode);
	console.log('headers: ' + JSON.stringify(res.headers));

	res.on('data', function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	})

	res.on('end', function(){
		console.log('评论完毕！ ');
	})
});

req.on('error', function(e){
	console.log('Error: ' + e.message);
});

req.write(postData);
req.end();