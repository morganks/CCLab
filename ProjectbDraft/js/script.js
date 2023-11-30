let sound;
let amplitude;

function preload() {
  sound = loadSound('Understand.mp3');
}

function setup()  {
  createCanvas(400, 400);
  amplitude = new p5.Amplitude();
} 

function draw() {
 

  let level = amplitude.getLevel();
  let direction = map(level, 0, 1, 0, TWO_PI); //analyze amplitude

  let x1 = width / 2;
  let y1 = height / 2;
  let length = map(level, 0, 1, 100, 600); // use analyzed amplitude to get points for the line

  // get endpoint of the line based on the direction and length
  let x2 = x1 + cos(direction) * length;
  let y2 = y1 + sin(direction) * length;

  // Draw the line
  stroke(0);
  line(x1, y1, x2, y2);
}

function keyPressed() {
  if (keyCode === 32) {
    if (sound.isPlaying()) {
      sound.pause();
    } else {
      sound.play();
    }
  } else if (keyCode === BACKSPACE) {
    sound.stop();
  }
}
