// p5.js sketch in instance mode for website banner
let currentX = 0;
let currentY = 0;

let currentSize = 20;
let finalSize = 10;
let idleTimer = 0;
const easing = 0.1;

let sketch = function (p) {
  p.setup = function () {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent("sketch-container"); // Attach the canvas to the sketch-container div
  };

  p.draw = function () {
    p.clear();
    
    if ($("body").hasClass("hover")) {
      
      p.fill("blue");
      p.noStroke();
      finalSize = 50;
      
    } else {
      
      p.fill("white");
      p.noStroke();
      finalSize = 20;
        
    }
    
    if (p.pmouseX === p.mouseX && p.pmouseY === p.mouseY) {
      idleTimer ++
    } else {
      idleTimer = 0
    }
    
    console.log(idleTimer)
    
    if(idleTimer >= 100){
      finalSize = 0
    }


    // Use lerp to calculate a new position
    currentX = p.lerp(currentX, p.mouseX, easing);
    currentY = p.lerp(currentY, p.mouseY, easing);
    currentSize = p.lerp(currentSize, finalSize, easing);
    
    p.circle(currentX, currentY, currentSize);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

// Create an instance of the sketch
let p5Sketch = new p5(sketch);