var canvas;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  strokeWeight(height/40);
  // top <-> middle left
  setStroke();
  line(height/2, 3*height/16, 3*height/16, height/2);
  // top <-> middle middle
  setStroke();
  line(height/2, 3*height/16, height/2, height/2);
  // top <-> middle right
  setStroke();
  line(height/2, 3*height/16, 13*height/16, height/2);
  // middle left <-> middle middle
  setStroke();
  line(3*height/16, height/2, height/2, height/2);
  // middle middle <-> middle right
  setStroke();
  line(height/2, height/2, 13*height/16, height/2);
  // bottom <-> middle left
  setStroke();
  line(height/2, 13*height/16, 3*height/16, height/2);
  // bottom <-> middle middle
  setStroke();
  line(height/2, 13*height/16, height/2, height/2);
  // bottom <-> middle right
  setStroke();
  line(height/2, 13*height/16, 13*height/16, height/2);

  noStroke();
  // top
  setFill();
  ellipse(height/2, 3*height/16, 3*height/16, 3*height/16);
  // middle left
  setFill();
  ellipse(3*height/16, height/2, 3*height/16, 3*height/16);
  // middle middle
  setFill();
  ellipse(height/2, height/2, 3*height/16, 3*height/16);
  // middle right
  setFill();
  ellipse(13*height/16, height/2, 3*height/16, 3*height/16);
  // bottom
  setFill();
  ellipse(height/2, 13*height/16, 3*height/16, 3*height/16);
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
    stroke(0);
  } else {
    noStroke();
  }
}
