console.log("hello world")
var time = require('time-js');
var t = time('2p');
console.log(t.hours());          // 2
console.log(t.minutes());        // 0
console.log(t.period());         // pm
console.log(t.toString());       // 2:00 pm
console.log(t.nextDate());
console.log(t.format("hh:mm AM"));
console.log(t.isValid());