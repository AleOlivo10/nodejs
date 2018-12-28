var events = require('events');
var util = require("util")

var Person = function(name) {
    this.name = name;
};
var myEmmitter = new events.EventEmitter(); //myEmitter is now equal to this feature that's part of the event module

myEmmitter.on('someEvent', function(mssg) { //when this event (someEvent) happens, run the following function which has a parameter of mssg
    console.log(mssg)
});

myEmmitter.emit('someEvent', "the event was emitted");
util.inherits(Person, event.eventEmitter); //Person parameter is the thing inheriting something, events.EventEmitter is the thing being inherited

var james = new Person('james');
var eleanor = new Person('eleanor');
var rita = new Person('rita');
var people = [james, eleanor, rita];

people.forEach(function(person) {       //we're able to attach this function to each person because we activated this event listener onto Person on line 20
  person.on('speak', function(mssg) {
      console.log(person.name + " said: " + mssg);
  });  
});

james.emit('speak', "hey dudes"); //this is how event is emitted and line 28-31 is how we attached it to each name
eleanor.emit('speak', 'cowabunga');
rita.emit('speak', 'coding is gnarly');






















// // Adding the required Modules

// var events = require('events');
// var util = require('util');
// // creating a function Person

// var Person = function(name){
// // this allows, the function with any object created(james,saif,sampath) to utilise this function
//     this.name = name;
// }

// // From the module util, we are inheriting the from events.EventEmitter
// util.inherits(Person,events.EventEmitter);
// //randomly 3 objects storing in 3 variables
// var james = new Person('james');
// var saif = new Person('saif');
// var sampath = new Person('sampath');

// var People = [james,saif,sampath];

// People.forEach(function(Person){
//     Person.on('speak',function(msg){
//         console.log(Person.name + 'said this ' + msg );
//     });
// });

// james.emit('speak','This is james');
// saif.emit('speak','OH great nice to meet you Mer. ');
// sampath.emit('speak','Thats cool');