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

let colors = ['#b0f2b4ff', '#baf2e9ff', '#bad7f2ff', '#f2bac9ff', '#f2e2baff'];

for (var i =0; i < Math.random()*10000+1; i++) {
    var x = Math.random() * window.innerWidth; // return a random value between 0 and full inner width of screen
    var y = Math.random() * window.innerHeight; // return a random value between 0 and full inner height of screen 
    c.beginPath();
    c.arc(x, y, Math.random()*100+1, 0, Math.PI *2, false);
    c.strokeStyle = colors[Math.floor(Math.random()*4)];
    c.stroke(); 
}