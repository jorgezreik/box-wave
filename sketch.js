//Globals
var xOff = 0;
var zOff = 0;
var yOff = 0;

//Tuning
var boxSize = 10;
var boxCount = 14;
var amplitude = 70;
var speed = 1/24;
var density = 1/10;
var minHeight = 20;

function setup() {
  createCanvas(600,600,WEBGL);
  strokeWeight(0);
  ambientMaterial(250);
}

function draw() {
  background(51);

  rotateX(radians(-45));
  rotateY(radians(-45));

  directionalLight(color(250,250,200),-1,-1,-1);//right
  directionalLight(color(100,100,150),1,-1,-1);//left
  directionalLight(color(180,210,180),0,1,-1);//top

  xOff = -boxSize*boxCount/2+boxSize/2;
  zOff = -boxSize*boxCount/2+boxSize/2;

  for(var i = 0; i < boxCount; i ++) {
    for(var j = 0; j < boxCount; j++) {

      yOff = dist(xOff,zOff,0,0) - millis()*speed;
      yOff = amplitude*(0.5+sin(yOff*density)/2);

      push();
      translate(xOff,0,zOff);
      //fill(100+map(yOff,-amplitude,amplitude,0,155),0,100+map(yOff,amplitude,-amplitude,0,155));
      box(boxSize,minHeight+yOff,boxSize);
      pop();

      xOff += boxSize;
    }
    xOff = -boxSize*boxCount/2+boxSize/2;
    zOff += boxSize;
  }
}
