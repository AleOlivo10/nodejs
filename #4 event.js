//there are core modules that ppl can request that are a part of node.js, such as the event module
//whatever is returned from the module.exports pertaining to 'events will now be stored in the variable 'events'
var events = require('events');

var myEmmitter = new events.EventEmitter(); //myEmitter is now equal to this feature that's part of the event module

myEmmitter.on('someEvent', function(mssg) { //when this event (someEvent) happens, run the following function which has a parameter of mssg
    console.log(mssg)
});

myEmmitter.emit('someEvent', "the event was emitted");
// ----------------------------------------------

var util = require("util")

var Person = function(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter); //Person parameter is the thing inheriting something, events.EventEmitter is the thing being inherited

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

// var events = require('events');

// var myEmmitter = new events.EventEmitter();

// myEmmitter.on('anEvent',function(msg){
//     console.log(msg);
// });

// myEmmitter.emit('anEvent','The event is absolutely emmited');
