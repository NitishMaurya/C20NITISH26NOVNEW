//c20- use vsc
//SECTION1- VARIABLE DECLARE - GLOBAL
var r1,r2,r3,r4;

//SECTION2- SPRITES CREATE
function setup() {
  createCanvas(800,800);
  rectMode(CENTER);
  r1=  createSprite(400, 400, 50, 50);
  r2= createSprite(500,400,50,50)
  
}

//SECTION3-INSTRUCTIONS
function draw() {
  background("yellow"); 
  //make r1 move with mouse
  r1.x= World.mouseX;
  r1.y= World.mouseY; 
//ALGORITHM- IF MY RECT TOUCHES THEN CHANGE THEIR COLORS
if(r1.x - r2.x < r1.width/2 + r2.width/2 &&
  r2.x - r1.x < r1.width/2 + r2.width/2 &&
  r1.y - r2.y < r1.height/2 + r2.height/2 &&
  r2.y - r1.y < r1.height/2 + r2.height/2 ){
  r1.shapeColor= "red";
  r2.shapeCOlor= "red";
}
else{
  r1.shapeColor= "grey";
  r2.shapeCOlor= "grey";
}
  drawSprites();
} 