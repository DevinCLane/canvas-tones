// find canvas element, place it inside the variable
var canvas = document.querySelector('canvas'); 

// create context variable called 'c' 
var c = canvas.getContext('2d')

// set the canvas to take up the entire window height and width 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// color scheme
// c.fillStyle = "#b0f2b4ff"; //--granny-smith-apple
// c.fillStyle = "#baf2e9ff"; //--celeste
// c.fillStyle = "#bad7f2ff"; // --beau-blue
// c.fillStyle = "#f2bac9ff"; //--cameo-pink
// c.fillStyle = "#f2e2baff"; //--dutch-white

// // Arc and Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI *2, false);
// c.strokeStyle = "#baf2e9ff";
// c.fillStyle = "#f2e2baff";
// c.stroke();

/*
To do:
- Randomize number of circles
- Randomize colors of circles from the list of my color scheme
- Randomize shape of circles
*/
for (var i =0; i < (Math.random()*100000-1+1); i++) {
    var x = Math.random() * window.innerWidth; // return a random value between 0 and full inner width of screen
    var y = Math.random() * window.innerHeight; // return a random value between 0 and full inner height of screen 
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI *2, false);
    c.strokeStyle = "#bad7f2ff";
    c.stroke(); 
}