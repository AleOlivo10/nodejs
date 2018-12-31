var fs = require('fs');


//creating directories:
fs.mkdir('stuff', function() {
    fs.readFile('readMe.txt', 'uft8', function(error, data) {
        fs.writeFile('./stuff/writeMe.txt', data);
    })
});



//the above is an async way to create directory.

//doesnt work for me but that's ok





















// // node can also determine the your directory by using '__dirname';

// console.log(__dirname);
// console.log(__filename);
