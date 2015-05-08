/**
 * Created by Yujia on 2015/5/8.
 */
console.log('This is a log.');
console.info('This is an info.');
console.warn('This is a warn.');
console.error('This is an error.');

console.time('time');
for(var i=0;i<1000000;i++){}
console.timeEnd('time');