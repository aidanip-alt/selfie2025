let tearYLeft = 130;
let tearYRight = 130;

let blinkProgress = 0;
let isBlinking = false;

let rotationAngle = 0;

function setup() {
  createCanvas(500, 500);
  angleMode(RADIANS);
}

function draw() {
  background(mouseX, 100, mouseY);

  // Only spin when mouse is pressed
  if (mouseIsPressed) {
    rotationAngle += radians(1); // adjust speed here
  }

  // Move origin to center and apply rotation
  translate(width / 2, height / 2);
  rotate(rotationAngle);

  // Face background
  fill(255);
  rectMode(CENTER);
  square(0, 0, 470);

  fill(255);
  stroke(0);
  strokeWeight(2);
  square(-180, -150, 100); // left eye box
  square(180, -150, 100);  // right eye box

  // Blinking timer
  if (frameCount % 120 === 0 && !isBlinking) {
    isBlinking = true;
    blinkProgress = 0;
  }

  if (isBlinking) {
    blinkProgress += 5;
    if (blinkProgress >= 30) {
      isBlinking = false;
    }
  }

  if (mouseIsPressed === true) {
    // Sad eyes
    fill(250, 0, 0);
    circle(-180, -150, 50);
    ellipse(180, -150, 50, 50);

    // Frown
    noFill();
    stroke(0);
    strokeWeight(4);
    arc(0, 40, 100, 60, PI, TWO_PI);

    // Falling tears
    noStroke();
    fill(0, 0, 255, 150);
    ellipse(-180, tearYLeft - 250, 10, 15);
    ellipse(180, tearYRight - 250, 10, 15);

    tearYLeft += 2;
    tearYRight += 2;

    if (tearYLeft > height) tearYLeft = 130;
    if (tearYRight > height) tearYRight = 130;
  } else {
    // Reset tears
    tearYLeft = 130;
    tearYRight = 130;

    // Happy eyes
    fill(0);
    circle(-180, -150, 30);
    ellipse(180, -150, 30, 30);

    // Smile
    noFill();
    stroke(0);
    strokeWeight(4);
    arc(0, 40, 100, 60, 0, PI);
  }

  // Blinking eyelids
  if (isBlinking) {
    fill(200);
    noStroke();
    rect(-180, -150, 50, blinkProgress);
    rect(180, -150, 50, blinkProgress);
  }

 
  // Info text
  noStroke();
  fill(0, 200, 0);
  textSize(12);
  text('mouseX: ' + mouseX, -200, -200);
  text('mouseY: ' + mouseY, -200, -180);
  text('frameCount: ' + frameCount, -200, -160);

  textSize(36);
  text('do NOT click!', -100, 200);
}
