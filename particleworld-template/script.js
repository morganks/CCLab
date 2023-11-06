// CCLab Mini Project - 9.R Particles Template

let NUM_OF_PARTICLES = 30;
let particles = [];

function setup() {
  let canvas = createCanvas(600, 600);
  //canvas.parent("canvasWrapper");

  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height / 2));
  }
}

function draw() {
  background(0);

  // Set the top half as a dark starry night
  
  fill(255);
  noStroke();
  for (let i = 0; i < height / 2; i++) {
    if (random(1) < 0.1) {
      let x = random(width);
      let y = random(height / 2);
      ellipse(x, y, 2, 2);
    }
  }

  // mountains in the bottom half
  fill(50);
  triangle(0, height / 2, width / 2, height / 2 - 100, width, height / 2);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.canvasBorder();
    p.display();
  }
}

class Particle {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = 10; // Adjust star size
    this.starColor = color(255, 215, 0); //Gold
    this.xSpeed = random(-0.5, 0.5); // Adjust the horizontal speed
    this.ySpeed = random(-0.5, 0); // Limit vertical speed to the top half
    this.upperBoundary = height / 2; // Upper boundary for vertical movement
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  canvasBorder() {
    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }
    if (this.y < 0 || this.y > this.upperBoundary) {
      this.ySpeed *= -1;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(this.starColor);
    triangle(0, -this.size, -this.size / 2, this.size / 2, this.size / 2, this.size / 2);
    pop();
  }
}

   




