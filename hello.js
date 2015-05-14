function Hello(){
    var name;

    this.setName = function(thyName){
        name = thyName;
    };
    this.sayHello = function(){
        console.log('Hello ' + name);
    }
}

/*     singleobject.js
exports.Hello = Hello;
其他文件通过 require('./singleobject').Hello 获取Hello对象*/

module.exports = Hello;