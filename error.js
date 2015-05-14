/**
 * Created by raincal on 15/5/10.
 */
var events = require('events');
var emitter = new events.EventEmitter();

emitter.emit('error');