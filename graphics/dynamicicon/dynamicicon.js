var canvas;

var smallerSize;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  if (width < height) {
    smallerSize = width;
  } else {
    smallerSize = height;
  }

  strokeWeight(smallerSize/40);
  // top <-> middle left
  setStroke();
  line(smallerSize/2, 3*smallerSize/16, 3*smallerSize/16, smallerSize/2);
  // top <-> middle middle
  setStroke();
  line(smallerSize/2, 3*smallerSize/16, smallerSize/2, smallerSize/2);
  // top <-> middle right
  setStroke();
  line(smallerSize/2, 3*smallerSize/16, 13*smallerSize/16, smallerSize/2);
  // middle left <-> middle middle
  setStroke();
  line(3*smallerSize/16, smallerSize/2, smallerSize/2, smallerSize/2);
  // middle middle <-> middle right
  setStroke();
  line(smallerSize/2, smallerSize/2, 13*smallerSize/16, smallerSize/2);
  // bottom <-> middle left
  setStroke();
  line(smallerSize/2, 13*smallerSize/16, 3*smallerSize/16, smallerSize/2);
  // bottom <-> middle middle
  setStroke();
  line(smallerSize/2, 13*smallerSize/16, smallerSize/2, smallerSize/2);
  // bottom <-> middle right
  setStroke();
  line(smallerSize/2, 13*smallerSize/16, 13*smallerSize/16, smallerSize/2);

  stroke(255);
  // top
  setFill();
  ellipse(smallerSize/2, 3*smallerSize/16, 3*smallerSize/16, 3*smallerSize/16);
  // middle left
  setFill();
  ellipse(3*smallerSize/16, smallerSize/2, 3*smallerSize/16, 3*smallerSize/16);
  // middle middle
  setFill();
  ellipse(smallerSize/2, smallerSize/2, 3*smallerSize/16, 3*smallerSize/16);
  // middle right
  setFill();
  ellipse(13*smallerSize/16, smallerSize/2, 3*smallerSize/16, 3*smallerSize/16);
  // bottom
  setFill();
  ellipse(smallerSize/2, 13*smallerSize/16, 3*smallerSize/16, 3*smallerSize/16);
}

function setFill() {
  if (int(random(2)) === 1) {
    fill(105, 181, 65);
  } else {
    fill(198, 183, 5);
  }
}

function setStroke() {
  if (int(random(6)) <= 3) {
    stroke(255);
  } else {
    noStroke();
  }
}
