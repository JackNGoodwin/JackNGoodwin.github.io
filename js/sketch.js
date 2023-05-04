var pos, r;
var speed, seed;

function setup() {
    createCanvas(windowWidth, windowHeight);

    pos = createVector(random(width), random(height));
    r = createVector(random(-1, 1), random(-1, 1));
    seed = createVector(random(0, 0.02), random(0, 0.02));
    speed = 10;
}

function draw() {
    // background('#FEFEFA');
    // if (frameCount % 5 == 0) {
    noStroke();
    fill(254, 254, 250, 1);
    rect(-1, -1, width + 1, height + 1);
    // }

    noFill();
    stroke(50);
    ellipse(pos.x, pos.y, 1, 1);

    pos.add((noise(r.x) * speed) - 1, (noise(r.y) * speed) - 1);
    r.add(seed.x, seed.y);

    if (pos.x > width) pos.x = 0;
    if (pos.x < 0) pos.x = width;
    if (pos.y > height) pos.y = 0;
    if (pos.y < 0) pos.y = height;

    textSize(12);
    strokeWeight(0.7);
    text(seed.x + ", " + seed.y, 50, height - 20);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
