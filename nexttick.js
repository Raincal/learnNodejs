/**
 * Created by raincal on 15/5/10.
 */
function doSomething(args,callback){
    somethingComplicated(args);
    process.nextTick(callback);
};

doSomething(function onEnd(){
    compute();
});