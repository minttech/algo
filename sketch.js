//Design the Algorithm for Detecting Collision
var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 20, 50);
  movingRect=createSprite(400, 100, 30, 50);
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="orange";
  //fixedRect.width/2=20/2=10
  //movingRect.width/2=20/2=10
  //fixedRect.width/2+movingRect.width/2= 10+10=20
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x)
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
    && fixedRect.x- movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 
    && fixedRect.y- movingRect.y<fixedRect.height/2+movingRect.height/2 )
  {
    fixedRect.shapeColor="yellow";
  movingRect.shapeColor="green";
  }
  else {
    fixedRect.shapeColor="blue";
  movingRect.shapeColor="orange";
  }
  drawSprites();
}