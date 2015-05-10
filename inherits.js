var util = require('util');

var Base = function(){
    this.name = 'Base';
    this.base = 1990;

    this.sayHello = function(){
        console.log('Hello ' + this.name);
    };
};

Base.prototype.showName = function(){
    console.log(this.name);
};

var Sub = function(){
    this.name = 'Sub';
};

util.inherits(Sub,Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);