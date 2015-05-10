/**
 * Created by raincal on 15/5/10.
 */
var util = require('util');

var Person = function(){
    this.name = 'Raincal';
    this.toString = function(){
        return this.name;
    };
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));