/**
 * Created by cyj22 on 2015/7/17.
 */
var mongo = require('mongodb');
var host = 'localhost';
//var port = new mongo.Connection.DEFAULT_PORT;
var port = 27017;
var server = new mongo.Server(host, port, {auto_connect: true});
var db = new mongo.Db('node-mongo', server , {safe: true});
db.open(function(err, db){
    db.collection('users', function(err, collection){
        collection.insert({name: 'Raincal', age: 21},
            function(err, docs){
                if(err) throw err;
                else{
                    console.log(docs);
                    db.close(false);
                }
            });
    });
});

db.once('close', function(err, db){
    if(err) throw err;
    else{
        db.open(function(err, db){
            db.collection('users', function(err, collection){
                collection.insert({name: "Yujia", age: 20},
                    function(err, docs){
                        if(err) throw err;
                        else{
                            console.log(docs);
                            db.close(true);
                        }
                    });
            });
        });
    }
});