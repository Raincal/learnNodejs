/**
 * Created by raincal on 15/5/10.
 */
var fs = require('fs');
var data = fs.readFileSync('file.txt','utf-8');
console.log(data);
console.log('end.');