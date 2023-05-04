var pos, r;
var vel, seed;

function setup() {
    createCanvas(windowWidth, windowHeight);

    pos = createVector(width/2, height/2);  
    r = createVector(random(-1, 1), random(-1, 1));
    seed = createVector(random(0, 0.02), random(0, 0.02));
    vel = createVector(random(1, 3), random(1, 3));
}

function draw() {
    fill(50);
    stroke(150);
    ellipse(pos.x, pos.y, 5, 5);

    pos.add((noise(r.x) * vel.x) - 1, (noise(r.y) * vel.y) - 1);
  
    r.add(seed.x, seed.y);

    if (pos.x > width) pos.x = 0;
    if (pos.x < 0) pos.x = width;
    if (pos.y > height) pos.y = 0;
    if (pos.y < 0) pos.y = height;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
