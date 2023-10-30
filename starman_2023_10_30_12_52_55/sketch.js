/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
  
  
*/
let dancer;
let angle;
let dia;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);
  // ...except to adjust the dancer's name on the next line:
  dancer = new Starman(width/2, height/2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  // drawFloor(); // for reference only
  dancer.update();
  dancer.display(); 
  
}


// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Starman{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    // this.scale = 1
    
    //..
    //..
    //..
    
  }  
  update(){
    // this.scale = (sin(frameCount*0.01)+0.5)
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display(){
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    rotate(frameCount)
    scale(sin(frameCount*0.01))
    // ...
    // ******** //
    // ⬇️ draw your dancer here ⬇️
    
    for (let i = 0; i < 10; i++) {
    
    let x = random(0, width/2);
    let y = random(0, height/2);

      rotate( QUARTER_PI);

    // quad(0, 0, 86, 50, 50, 38, 20, 90);
      quad(0, 0, 26, 10, 50, 38, 20, 90);
      fill(random(255), random(255), random(255))
      triangle(0, 0, 58, 20, 86, 75);
      quad(86, 75, 26, 10, 50, 38, 20, 90);
      triangle(20, 90, 58, 20, 86, 75);
       quad(40, 40, 26, 10, 50, 38, 20, 90);
       line(30, 20, 85, 75);
       line(40, 40, 20, 90);
    
   
  
  
  // limit the value in the range 100 to 220
  dia = constrain(dia, 50, 120);
  
  
}
    
    
    
    
    // ⬆️ draw your dancer here ⬆️
    
    
    
    
    // ******** //
    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()
   
    
    
    pop();
  }  
  drawReferenceShapes(){
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);                       
    rect(-100, -100, 200, 200);    
    fill(255);
    stroke(0);
  }
  
  
}





/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmomize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 

*/