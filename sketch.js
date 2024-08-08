function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("purple");
  
  stroke ("blue");
  fill("pink");
  rect (mouseX, mouseY, 20, 35)
  
  if (mouseIsPressed) {
    react(mouseX, mouseY, 20, 35);
  }
}.
