// find canvas element, place it inside the variable
var canvas = document.querySelector('canvas'); 

// create context variable called 'c' 
var c = canvas.getContext('2d')

// set the canvas to take up the entire window height and width 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// create fill styles
c.fillStyle = "#b0f2b4ff"; //--granny-smith-apple
// create rectangle
c.fillRect(100, 100, 100, 100);
// create the rest
c.fillStyle = "#baf2e9ff"; //--celeste
c.fillRect(200, 200, 100, 100);
c.fillStyle = "#bad7f2ff"; // --beau-blue
c.fillRect(300, 300, 100, 100);
c.fillStyle = "#f2bac9ff"; //--cameo-pink
c.fillRect(400, 400, 100, 100);
c.fillStyle = "#f2e2baff"; //--dutch-white
c.fillRect(500, 500, 100, 100);

// pyramid
// Create a line, start a path
c.beginPath();
// where does the line start
c.moveTo(100, 300);
// where does the line stop 
c.lineTo(300, 100);
// make new line from previous starting point with new ending point
c.lineTo(400, 300);
// make middle line from apex axis 
c.moveTo(300, 100);
c.lineTo(200, 400);
// stroke style 
c.strokeStyle = "#bad7f2ff";
// call a stroke method to draw
c.stroke();

// new pyramid
c.beginPath();
// where does the line start
c.moveTo(200, 600);
// where does the line stop 
c.lineTo(450, 300);
// make new line from previous starting point with new ending point
c.lineTo(600, 500);
// make middle line from apex axis 
c.moveTo(450, 300);
c.lineTo(400, 700);
// stroke style 
c.strokeStyle = "#f2e2baff";
// call a stroke method to draw
c.stroke();