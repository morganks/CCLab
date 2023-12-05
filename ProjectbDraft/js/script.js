let amplitude;
let circle;
let trail = [];
let songs = [];
let sound, sound2, sound3
let playTracker = 0;

function preload() {
  sound = loadSound('assets/Understand.mp3');

  //another song
  sound2 = loadSound('assets/Prospect.mp3');
  sound3 = loadSound('assets/merry-go-round.mp3');
  songs.push(sound);
  songs.push(sound2);
  console.log(songs);
}

function setup() {

  let p = createCanvas(500, 500);
  p.parent('p5container');
  amplitude = new p5.Amplitude();

  circle = {
    x: width / 2,
    y: height / 2,
    radius: 20,
    speedX: random(1, 3),
    speedY: random(1, 3)
  };
}

function draw() {
  //background(51);

  let level = amplitude.getLevel();
  let direction = map(level, 0, 1, 0, TWO_PI); // analyze amplitude

  // Update circle position
  circle.x += circle.speedX * cos(direction);
  circle.y += circle.speedY * sin(direction);

  // Keep drawer within canvas
  if (circle.x - circle.radius < 0 || circle.x + circle.radius > width) {
    circle.speedX *= -1;
  }
  if (circle.y - circle.radius < 0 || circle.y + circle.radius > height) {
    circle.speedY *= -1;
  }

  //circle radius based on the sound amplitude
  let minRadius = 3;
  circle.radius = map(level, 0, 1, minRadius, 30);

  // Draw the circle
  fill(0, 150, 255);
  noStroke();
  ellipse(circle.x, circle.y, circle.radius * 2);



}
function mousePressed() {

  if (playTracker == 1) {
    if (sound.isPlaying()) {
      sound.pause();
    } else {
      sound.play();
    }
  }
  if (playTracker == 2) {
    if (sound2.isPlaying()) {
      sound2.pause();
    } else {
      sound2.play();
    }
  }
  if (playTracker == 3) {
    if (sound3.isPlaying()) {
      sound3.pause();
    } else {
      sound3.play();
    }
  }

}



function keyPressed() {

  // if (keyCode === 32) {
  //   if(playTracker == 1){
  //     if (sound.isPlaying()) {
  //       sound.pause();
  //     } else {
  //       sound.play();
  //     }
  //   }

  //   if(playTracker == 2){
  //     if (sound2.isPlaying()) {
  //       sound2.pause();
  //     } else {
  //       sound2.play();
  //     }
  //   }

  //    if(playTracker == 3){
  //     if (sound3.isPlaying()) {
  //       sound3.pause();
  //     } else {
  //       sound3.play();
  //     }
  //   }




  if (keyCode === BACKSPACE) {
    sound.stop();
  }
  if (keyCode === LEFT_ARROW) {
    if (!sound.isPlaying()) {
      sound.play();
      playTracker = 1;

    }
    sound2.pause();
    sound3.pause();
  }

  if (keyCode === UP_ARROW) {
    if (!sound2.isPlaying()) {
      sound2.play();
      playTracker = 2;
    }
    sound.pause();
    sound3.pause();
  }

  if (keyCode === RIGHT_ARROW) {
    if (!sound3.isPlaying()) {
      sound3.play();
      playTracker = 3;

    }
    sound.pause();
    sound2.pause();
  }


}