var redis = require('redis');
var client = redis.createClient(6379,"127.0.0.1");

client.on('error',function(err){
    console.log(err);
});
client.select(1,function(){
    client.set('person_1',{name:'Tom',age:12},function(err,ret){
        console.log(arguments);
    });
});