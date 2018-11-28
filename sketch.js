var img1;
function preload() {
img1 = loadImage("anthony.png.png");
img2 = loadImage("death.jpg");

}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(img2);
	background(mouseX, mouseY, 40, 40)

  noStroke();
  image(img1, mouseX - 50, mouseY - 50, 125, 125);

  background(100, 50);
  //rectangle
  fill(mouseX + 70, mouseY + 70, 200, 200);
  rect(280, 180, 50, 50, 50);

	fill(mouseX + 80, mouseY + 80, 250, 250);
  rect(380, 180, 50, 50, 50);

  fill(mouseX + 90, mouseY + 90, 300, 300);
  rect(480, 180, 50, 50, 50);

  fill(mouseX + 100, mouseY + 100, 350, 350);
  rect(580, 180, 50, 50, 50);

  fill(mouseX + 110, mouseY + 110, 130, 150);
  rect(180, 180, 50, 50, 50);

  fill(mouseX + 60, mouseY + 60, 100, 100);
  rect(80, 180, 50, 50, 50);

  fill(mouseX + 50, mouseY + 50, 50, 50);
  rect(-20, 180, 50, 50, 50);


  fill(mouseX + 140, mouseY + 140, 200, 200);
  rect(280, 80, 50, 50, 50);

	fill(mouseX + 150, mouseY + 150, 250, 250);
  rect(380, 80, 50, 50, 50);

  fill(mouseX + 160, mouseY + 160, 300, 300);
  rect(480, 80, 50, 50, 50);

  fill(mouseX + 170, mouseY + 170, 350, 350);
  rect(580, 80, 50, 50, 50);

  fill(mouseX + 130, mouseY + 130, 150, 150);
  rect(180, 80, 50, 50, 50);

  fill(mouseX + 120, mouseY + 120, 100, 100);
  rect(80, 80, 50, 50, 50);

  fill(mouseX + 110, mouseY + 110, 50, 50);
  rect(-20, 80, 50, 50, 50);


  fill(mouseX + 210, mouseY + 210, 200, 200);
  rect(280, -20, 50, 50, 50);

	fill(mouseX + 220, mouseY + 220, 250, 250);
  rect(380, -20, 50, 50, 50);

  fill(mouseX + 230, mouseY + 230, 300, 300);
  rect(480, -20, 50, 50, 50);

  fill(mouseX + 240, mouseY + 240, 350, 350);
  rect(580, -20, 50, 50, 50);

  fill(mouseX + 200, mouseY + 200, 150, 150);
  rect(180, -20, 50, 50, 50);

  fill(mouseX + 190, mouseY + 190, 100, 100);
  rect(80, -20, 50, 50, 50);

  fill(mouseX + 180, mouseY + 180, 50, 50);
  rect(-20, -20, 50, 50, 50);



  fill(mouseX + 10, mouseY + 10, 200, 200);
  rect(280, 280, 50, 50, 50);

	fill(mouseX + 20, mouseY + 20, 250, 250);
  rect(380, 280, 50, 50, 50);

  fill(mouseX + 30, mouseY + 30, 300, 300);
  rect(480, 280, 50, 50, 50);

  fill(mouseX + 40, mouseY + 40, 350, 350);
  rect(580, 280, 50, 50, 50);

  fill(mouseX, mouseY, 150, 150);
  rect(180, 280, 50, 50, 50);

  fill(mouseX - 10, mouseY - 10, 100, 100);
  rect(80, 280, 50, 50, 50);

  fill(mouseX - 20, mouseY - 20, 50, 50);
  rect(-20, 280, 50, 50, 50);


  fill(mouseX - 60, mouseY - 60, 200, 200);
  rect(280, 380, 50, 50, 50);

	fill(mouseX - 50, mouseY - 50, 250, 250);
  rect(380, 380, 50, 50, 50);

  fill(mouseX - 40, mouseY - 40, 300, 300);
  rect(480, 380, 50, 50, 50);

  fill(mouseX - 30, mouseY - 30, 350, 350);
  rect(580, 380, 50, 50, 50);

  fill(mouseX - 70, mouseY - 70, 150, 150);
  rect(180, 380, 50, 50, 50);

  fill(mouseX - 80, mouseY - 80, 100, 100);
  rect(80, 380, 50, 50, 50);

  fill(mouseX - 90, mouseY - 90, 50, 50);
  rect(-20, 380, 50, 50, 50);
}
