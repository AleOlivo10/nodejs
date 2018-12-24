var time = 0;

var timer = setInterval(function () {
    time += 2;
    console.log(time + ' seconds have passed');
    if (time > 5) {
        clearInterval(timer);
    }
}, 2000);

//WENT OVER SUPER COOL TIMER FEATURE IN VIDEO 4

















// console.log("Hello Saif, You are learning Node.js!");

// setTimeout(function(){
//     console.log("Three seconds \n have passed!");

// },3000);