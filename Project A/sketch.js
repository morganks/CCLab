let organisms = []; //declares empty array for "organisms" 
let radius = 10; // sets initial radius for organisms 
let decayRate = 0.01; //rate at which organism trail will decay (help from ChatGPT)
let decaySpeed = 0.1; // sets initial decay speed that decreases over time (help from ChatGPT)
let startTime; // variable stores the starting time of the organisms' lifespan (watched youtube tutorial)

function setup() {
  createCanvas(400, 400);
  startTime = millis(); //records starting time of the animation
  createOrganism(width / 2, height / 2); //creates initial organims in center of the canvas
}

function draw() {
  background(220);

  for (let organism of organisms) { //organism behavior update
    organism.update();
    organism.display();
  }
}

function createOrganism(x, y) { //creates new organism and adds it to the array
  let newOrganism = new Organism(x, y);
  organisms.push(newOrganism);
}

function mousePressed() { //creates new organism at location where mouse is pressed
  createOrganism(mouseX, mouseY); // Create a new organism at the mouse's current position
}

class Organism { //defines a class for the organisms (watched youtube tutorial)
  constructor(x, y) { //initializes the organisms
    this.x = x;
    this.y = y;
    this.history = [];
    this.isDone = false;
    this.startTime = millis();
  }

  update() {
    let currentTime = millis() - this.startTime; //(watched youtube tutorial)

    if (!this.isDone) { //conditional, checks if "isDone" is 'false'.
      let xOffset = random(-10, 10); //random movement of the organism
      let yOffset = random(-10, 10); //random movement of the organism

      if (this.x + xOffset > 0 && this.x + xOffset < width && this.y + yOffset > 0 && this.y + yOffset < height) { //checks to see if the random movements are within the canvas
        this.x += xOffset;
        this.y += yOffset;

        let point = createVector(this.x, this.y); //creates new vector 'point' which represents current (x,y) position of the orgnaism        
        this.history.push(point);

        radius += 0.5;

        if (radius > 100) {
          radius = 10;
        }

        decaySpeed -= decayRate;

        if (currentTime >= 20000) {
          this.isDone = true;
        }
      }
    }
  }

  display() {
    stroke(0, 100 - decaySpeed * (millis() - this.startTime) * decayRate);
    strokeWeight(2);

    beginShape();
    for (let point of this.history) {
      vertex(point.x, point.y);
    }
    endShape();

    noFill();
    stroke(255, 0, 0, 100);
    ellipse(this.x, this.y, radius * 2);
  }
}
