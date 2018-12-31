//THIS IS FOR READING AND WRITING FILES


var fs = require('fs');     //this format is typical when requiring modules. The variable name is always the same as the module name

var readMe = fs.readFileSync('input.txt', 'utf8');       
//console.log(readMe);


//the 'Sync' part means it wont read any code after this command until after after its done reading the code specified (input.txt)
//utf8 just translates the binary data of the file into something a human can understand
//what it reads will be stored in the readME variable
//in you do console.log at that point it will tell you what's inside of the input.txt file when you run app.js on the command line

fs.writeFileSync('writeMe.txt', readMe)

//this is to create a new file. writeMe.txt is where we want the info to go
//the 2nd parameter, the readMe variable, specifies what information is going to be inserted into the writeMe.txt file

//!!!!! - we wont see anything logged onto the console but a new file named writeMe.txt now can be found inside my node.js folder - !!!!


//SYNCHRONOUS ABOVE
//--------------------------------------------
//A SYNCHRONOUS BELOW

fs.readFile('input.txt', 'utf8', function(error, data) {
    fs.writeFile('writeMe.txt', data);
}); 

//notice is doesnt have 'sync' written anywhere. That makes it an asyncronous method
//because it it async we need a 3rd callback function to fire when the process has completed. This is the 3rd parameter
//the callback function has 2 parameters 1) an error message if there is an error and 2) the contents of the file being read
//one of the benefit of this is that if there is an error it wont block any other code from running

//the writeFile function is copying the contents of input.txt to a new file being created called writeMe.txt
//'data' is the contents of the input.txt file

//--------------------------------------------
//HOW TO DELETE FILES USING NODE

fs.unlink('writeMe.txt');








// var fs = require('fs');

// var file = fs.readFile('input.txt','utf8',function(err,data){
//     fs.writeFile('writeme.txt',data);
//     console.log(data);
// });

// console.log('This is an instruction outside the sync file system.');