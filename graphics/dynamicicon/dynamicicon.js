var canvas;

var size;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  if (width < height) {
    size = width;
  } else {
    size = height;
  }

  strokeWeight(size/40);
  // top <-> middle left
  setStroke();
  line(size/2, 3*size/16, 3*size/16, size/2);
  // top <-> middle middle
  setStroke();
  line(size/2, 3*size/16, size/2, size/2);
  // top <-> middle right
  setStroke();
  line(size/2, 3*size/16, 13*size/16, size/2);
  // middle left <-> middle middle
  setStroke();
  line(3*size/16, size/2, size/2, size/2);
  // middle middle <-> middle right
  setStroke();
  line(size/2, size/2, 13*size/16, size/2);
  // bottom <-> middle left
  setStroke();
  line(size/2, 13*size/16, 3*size/16, size/2);
  // bottom <-> middle middle
  setStroke();
  line(size/2, 13*size/16, size/2, size/2);
  // bottom <-> middle right
  setStroke();
  line(size/2, 13*size/16, 13*size/16, size/2);

  stroke(255);
  // top
  setFill();
  ellipse(size/2, 3*size/16, 3*size/16, 3*size/16);
  // middle left
  setFill();
  ellipse(3*size/16, size/2, 3*size/16, 3*size/16);
  // middle middle
  setFill();
  ellipse(size/2, size/2, 3*size/16, 3*size/16);
  // middle right
  setFill();
  ellipse(13*size/16, size/2, 3*size/16, 3*size/16);
  // bottom
  setFill();
  ellipse(size/2, 13*size/16, 3*size/16, 3*size/16);
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
