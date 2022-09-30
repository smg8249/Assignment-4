var bg = [
  [45, 73, 128], //med dark blue
  [80, 114, 154,], // med blue
  [115, 162, 189], //light blue
  [230, 191, 140], // light yellow orange
  [201, 114, 98], // med red orange 
  [129, 74, 72], // med dark mauve red 
];

var randomX = [];
var randomY = [];

var supergirl;

function preload(){
  supergirl = loadImage("supergirlflying.png");
  cloud3 = loadImage("cloud3.png");
  cloud4 = loadImage("cloud4.png");

}

function setup() {
  createCanvas(400, 400);
  rando();
  
  
  
}

function draw() { 
 
  //places cloud at random position
  for (let i=0; i<2; i++){
    randomX[i] = random(width);
    randomY[i]= random(height);
    image(cloud3, randomX[i], randomY[i], cloud3.width/3, cloud3.height/3);
  }
  for (let i=0; i<2; i++){
    randomX[i] = random(width);
    randomY[i]= random(height);
    image(cloud4, randomX[i], randomY[i], cloud4.width/3, cloud4.height/3);
  }
  
  image(supergirl, mouseX, mouseY, supergirl.width/15, supergirl.height/15);
  noLoop();

}

function mousePressed(){
  rando();
  draw();
}


function rando(){
  background(random(bg)); // randomizes background color 

}