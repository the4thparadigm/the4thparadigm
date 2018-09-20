
var frontBottomPoints = [];
var frontTopPoints = [];

var backBottomPoints = [];
var backTopPoints = [];

var currentWidth;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(10);
  currentWidth = width;

  backBottomPoints[0] = createVector(0, height);
  backBottomPoints[1] = createVector(currentWidth, height);
  backTopPoints[0] = createVector(0, random(height/8, height - height/8));
  while(backTopPoints[backTopPoints.length - 1].x < currentWidth) {
    generateNewBackTopPoint(backTopPoints);
  }

  frontBottomPoints[0] = createVector(0, height);
  frontBottomPoints[1] = createVector(currentWidth, height);
  frontTopPoints[0] = createVector(0, random(height/8, height - height/8));
  while(frontTopPoints[frontTopPoints.length - 1].x < currentWidth) {
    generateNewFrontTopPoint(frontTopPoints);
  }

  noStroke();
}

function draw() {
  background(255);

  fill(0);
  beginShape();
  vertex(backBottomPoints[1].x, backBottomPoints[1].y);
  vertex(backBottomPoints[0].x, backBottomPoints[0].y);
  for (var i = 0; i < backTopPoints.length; i++) {
    vertex(backTopPoints[i].x, backTopPoints[i].y);
  }
  endShape(CLOSE);

  fill(1, 63, 29);
  beginShape();
  vertex(frontBottomPoints[1].x, frontBottomPoints[1].y);
  vertex(frontBottomPoints[0].x, frontBottomPoints[0].y);
  for (var i = 0; i < frontTopPoints.length; i++) {
    vertex(frontTopPoints[i].x, frontTopPoints[i].y);
  }
  endShape(CLOSE);

  updateBackTopPoints();
  updateFrontTopPoints();
}

function updateBackTopPoints() {
  var modifier = createVector(-.5, 0);
  for (var i = 0; i < backTopPoints.length; i++) {
    backTopPoints[i].add(modifier);
  }
  while (backTopPoints[1].x < 0) {
    backTopPoints.splice(0, 1);
  }
  while (backTopPoints[backTopPoints.length - 2].x < currentWidth) {
    generateNewBackTopPoint(backTopPoints);
  }
}

function updateFrontTopPoints() {
  var modifier = createVector(-1, 0);
  for (var i = 0; i < frontTopPoints.length; i++) {
    frontTopPoints[i].add(modifier);
  }
  while (frontTopPoints[1].x < 0) {
    frontTopPoints.splice(0, 1);
  }
  while (frontTopPoints[frontTopPoints.length - 2].x < currentWidth) {
    generateNewFrontTopPoint(frontTopPoints);
  }
}

function generateNewBackTopPoint() {
  backTopPoints.push(createVector(backTopPoints[backTopPoints.length - 1].x + random(15, 100), random(0, height - height/4)));
}

function generateNewFrontTopPoint() {
  frontTopPoints.push(createVector(frontTopPoints[frontTopPoints.length - 1].x + random(15, 100), random(height/8, height - height/8)));
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  currentWidth = width;
  backBottomPoints[1] = createVector(currentWidth, height);
  frontBottomPoints[1] = createVector(currentWidth, height);
}
