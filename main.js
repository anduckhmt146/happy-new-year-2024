let fireworks = [];
let clicked = false;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
}

function draw() {
  background(0, 0, 0, 25);
  if (!clicked) {
    fill(255, 255, 255, 10);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(20);
    text('click for fireworks', window.innerWidth / 2, window.innerHeight / 2);
  } else {
    textSize(100);
    fill(255, 255, 255, 10);
    noStroke();
    textAlign(CENTER, CENTER);
    text('Happy 2024', window.innerWidth / 2, window.innerHeight / 2);
    textSize(10);
    noStroke();

    textSize(30);
    ~noStroke();
    text(
      ' Wish all your dreams turn into reality \nand all your efforts into great achievements.',
      window.innerWidth / 2,
      window.innerHeight / 2 + 150
    );

    for (let f of fireworks) f.step();
  }
}

function mouseReleased() {
  clicked = true;
  let target = {
    x: mouseX,
    y: mouseY,
  };
  fireworks.push(new Firework(target));
}
