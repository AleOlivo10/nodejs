// var counter = require('./#6\ moduleexp')
//the above line was the first way we got the counter feature to work. outdated now.

// console.log(stuff.counter(["alejandra", "john", "jayne"]));
//the above line is changed to 'stuff.counter' instead of just 'counter' because it's being referenced through 'stuff'
//stuff is equal to module.exports which is an empty object

var stuff = require("./stuff");
//since we're not just uploading the counter function, we're naming our variable stuff, after the file name

console.log(stuff.counter("A Merry Christmas to all!"))     //tells me how many letters there are
console.log(stuff.adder(5,6));

console.log(stuff.adder(stuff.pi, 5));
//the above line is just using the adder function do to 3.142(pi) +5







// // This is the module getting function. it gets its module from moduleexp.js

// var stuff = require('./moduleexp.js');// | ./ | is used to search in present directory.


// // look here at the counter part, it is actually taking the arguments. and doing everything.
// // We need to intialise the 'counter variable first.'
// console.log(stuff.counter(['Hello','This is','Saif']));
// console.log(stuff.adder(5,6));
// console.log(stuff.bi);
// console.log(stuff.adder(stuff.bi,44));