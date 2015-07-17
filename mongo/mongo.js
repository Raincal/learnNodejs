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
    if(err) throw err;
    else{
        console.log('成功建立数据库');
        db.close();
    }
});
db.on('close', function(err, db){
    if(err) throw err;
    else console.log('成功关闭数据库');
});