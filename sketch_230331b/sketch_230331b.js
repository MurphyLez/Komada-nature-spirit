//Murphy Lessard
//Pascal Huynh
//Web and Effects, section 01
//Komada rage
//https://openprocessing.org/sketch/1884903

/* to move the little spirit man put your mouse on it, 
to change the green shade of the background click the mouse left button,
the moce the little spirit man to the left and right use the left and right arrow keys */

/* this code is based on characters in this movie called princess Mononoke.
My code represents a sort of Kami (a Japanese word that represents deities, divinities, goshts, spirits
or any sort of supernatural phenomena), more precisely a Kodama (nature spirits that resides in the trees).
It was made to show how the human being is so controlling of the nature and that even the spirits cannot
resist the human rage of power. This code also shows that there is more than one kind of way to control
the nature such as destroying it, polluting it, and so on.*/


let bounds, // holds x, y, w, h of the oval's bounding box
  size = 60,
  x,
  y; // x and y coordinates of the oval
let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("little3.png");

  // get the width and height of the oval so we can center it initially
  bounds = { x: width / 2 - size / 2, y: height / 2 - size / 2, w: size, h: size };
  x = bounds.x;
  y = bounds.y;
  r = 0;
  g = 150;
  b = 0;
}

function draw() {
  background(r, g, b);

  // draw the oval in black and get its bounding box
  littleMan(x, y, 10, 12, 8, 20);

  // check if the mouse is inside the bounding box and move the oval if so
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
  
  // press the left arrow key to move the little man to the left
  if (keyIsPressed && keyCode === LEFT_ARROW) {
    x -= 5;
  }
  
  // press the right arrow key to move the little man to the right
  if (keyIsPressed && keyCode === RIGHT_ARROW) {
    x += 5;
  }
}

//create the function to draw the little man
function littleMan(x, y, firstEye, secondEye, roundMouth, roundHead) {
  //body image
  image(img, x - 24, y + 25, 50, 20);

  //head
  fill(255, 255, 255);
  ellipse(x, y, size, size);
  bounds = { x: x - size / 2, y: y - size / 2, w: size, h: size };

  //first eye
  fill(0, 0, 0);
  circle(x - 15, y - 6, firstEye);

  //second eye
  fill(0, 0, 0);
  circle(x + 17, y - 5, secondEye);

  //round mouth
  fill(0, 0, 0);
  circle(x, y + 14, roundMouth);
}

//when clicking the mouse the color change in any shade of green colors

function mouseClicked() {
  r = random(0, 150);
  g = random(180, 255);
  b = random(0, 150);
}
