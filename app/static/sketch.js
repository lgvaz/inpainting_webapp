let img;

function setup() {
  let c = createCanvas(400, 400);
  background(200);
  textAlign(CENTER);
  text('drop image', width / 2, height / 2);
  c.drop(gotFile);
  noStroke();
  fill(0);
}

function draw() {
  if (img && mouseIsPressed){
    ellipse(mouseX, mouseY, 40, 40);
  }
}

function gotFile(file) {
  img = createImg(file.data, drawFile).hide();

}

function drawFile() {
  image(img, 0, 0, width, height);
}
