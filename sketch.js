
var r = 0;
var g = 0;
var b = 0;

function setup(){

  createCanvas(1200,400);
}

function draw()
{
  r = map(mouseX, 0, 1300, 0, 355);
  g = map(mouseY, 0, 400, 0, 255);
  b = r + g;
  background(r,g,b);

  fill(0);
  ellipse(mouseX, mouseY, 25, 25);
}