//normal function statement:
function sayHi() {
    console.log('hi');
}

sayHi();


//function expression:
var sayBye = function() {   //this is an anonymous function. variable is being made equal to a nameless function
    console.log('bye');
}

// sayBye();       //call on the function expression the same way as above normal function
//function expressions are common in node.js and I should expect to see more of it


//we can pass functions from one thing to another
function callFunction(func) {       //it's taking a function as a parameter
    func();
}

callFunction(sayBye)    //the callFuction() is being used to call on the sayBye() and you get the same result as when using just sayBye() by itself









// function callFunction(fun){
//  fun();
// }

// var tata = function(){
//     console.log('bye');
// }

// callFunction(tata);