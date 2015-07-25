var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/searching', function(req, res){
    var val = req.query.search;
    var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20craigslist.search" +
"%20where%20location%3D%22sfbay%22%20and%20type%3D%22jjj%22%20and%20query%3D%22" + val + "%22&format=" +
"json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    /*request(url, function(err, resp, body){
        resultsArray = [];
        body = JSON.parse(body);
        console.log(body);
        if(!body.query.results.RDF.item){
            results = "No results found.Try again."
            res.send(results);
        }else{
            results = body.query.results.RDF.item;
            for(var i=0;i<results.length;i++){
                resultsArray.push({
                    title: results[i].title[0],
                    about: results[i]['about'],
                    desc: results[i]['description']
                })
            }
        }
        console.log(resultsArray);
        res.send(resultsArray);
    })*/
    requests(url, function(data){
        res.send(data);
    });
});

function requests(url, callback){
    request(url, function(err, resp, body){
        var resultsArray = [];
        body = JSON.parse(body);
        if(!body.query.results.RDF.item){
            results = "No results found.Try again."
            callback(results);
        }else{
            results = body.query.results.RDF.item;
            for(var i=0;i<results.length;i++){
                resultsArray.push({
                    title: results[i].title[0],
                    about: results[i]['about'],
                    desc: results[i]['description']
                });
            };
            console.log(resultsArray);
        }
        callback(resultsArray);
    });
};

module.exports = router;
