//A MODULE IS A SET OF FUNCTIONS YOU WANT TO INCLUDE IN YOUR APPLICATION

// var counter = function(arr) {
//     return "There are " + arr.length + " elements in this array.";
// };
//this code is for a function that tells you how many items there are within an array

// var adder = function(a,b) {
    // return `The sum of the two numbers is ${a+b}`;       //because this is written within a template string with `` theres no need to concatinate
// };
// to embed a variable you do ${}

// var pi = 3.142;


// module.exports = counter;
//module.exports is just an empty object to begin with and we can tack the function onto the end of it

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;
// //we just exported all three things and they're all going to be made available on the getmodulestuff file
//VERSION 1
// ------------------------------------------------------------------
//VERSION 2 BELOW

// module.exports.counter = function(arr) {
//     return "There are " + arr.length + " elements in this array.";
// };

// module.exports.adder = function(a,b) {
//     return `The sum of the two numbers is ${a+b}`;       //because this is written within a template string with `` theres no need to concatinate
// };

// module.exports.pi = 3.142;

//When you do it this way you dont have to do module.exports.counter = counter

// --------------------------------------------------------------------
//VERION 3 BELOW:

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};

//this one didnt work for me


// // This file is completely a module for getmodule.js file.


// // a function expression is made here.
// var counter = function(arry){
//     return 'The number of '+arry.length + '\n done!';
// };
// // Adding more modules
// var adder = function(a,b){
//     return 'On adding the two number it gives'+(a+b);
// }

// var pi = 3.1535;

// // module.exports is the important part, it makes the counter available for other modules!
// module.exports.counter = counter ;
// module.exports.adder = adder;
// module.exports.bi = pi;