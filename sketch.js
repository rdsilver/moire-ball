var img;
var ballX = 0;
var ballY = 0;
var ballXDir = 1;
var ballYDir = 1;
var ballXMax;
var ballYMax;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  angleMode(DEGREES);
  setUpImageAndBallMaxes();
}

function setUpImageAndBallMaxes() {
  ballXMax = width/60;
  ballYMax = ballXMax * (height/width);

  img = createImage(width, height);
  img._pixelDensity = 1;
  img.loadPixels();
  for(var x = 0; x < img.width; x++) 
    for(var y = 0; y < img.height; y++) {
      if (random() > .6)
        img.set(x, y, [0, 0, 0, 255]);
    }

  img.updatePixels();
}



function draw() {
  background(255);
  image(img, 0,0);
  ballMovement();


  push();
  translate(width/2, height/2);
  rotate(2);
  translate(-width/2, -height/2);
  image(img, ballY, ballX);
  pop();
}

function ballMovement() {
  if (ballX >= -ballXMax && ballX <= ballXMax) {
    ballX+=ballXDir;
  } else {
    ballXDir*=-1;
    ballX+=ballXDir;
  }

  if (ballY >= -ballYMax && ballY <= ballYMax) {
    ballY+=ballYDir;
  } else {
    ballYDir*=-1;
    ballY+=ballYDir;
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  setUpImageAndBallMaxes();
  ballX=0;
  ballY=0;
}
