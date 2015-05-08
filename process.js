/**
 * Created by Yujia on 2015/5/9.
 */
process.stdout.write('This is stdout.');
process.stderr.write('This is stderr.');

process.stdin.setEncoding('utf-8');

/*
process.stdin.on('data',function(data){
    console.log(data);
})*/

process.stdin.on('readable',function(){
    var data = process.stdin.read();
    console.log(data);
})

process.on('exit',function(){
    console.log('Programe will exit!');
})

//SIGING ->>signal interrupted

process.on('SIGINT',function(){
    console.log('Programe has a sigint.');
    process.exit();
})