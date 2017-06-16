var pos, r;
var s = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);

    pos = createVector(random(width), random(height));
    r = createVector(random(-1, 1), random(-1, 1));
}

function draw() {
    background('#FEFEFA');

    noFill();
    stroke(50);
    ellipse(pos.x, pos.y, s, s);

    pos.add((noise(r.x) * 2) - 1, (noise(r.y) * 2) - 1);
    r.add(0.003, 0.0035);

    if (pos.x > width) pos.x = 0;
    if (pos.x < 0) pos.x = width;
    if (pos.y > height) pos.y = 0;
    if (pos.y < 0) pos.y = height;
}
