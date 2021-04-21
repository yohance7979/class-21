var movingRect,fixedRect
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite (400, 300, 50, 80);
  fixedRect.shapeColor="red"
  movingRect=createSprite(400,100,80,50)
  movingRect.shapeColor="red"
fixedRect.velocityY=-5
movingRect.velocityY=5
}

function draw() {
  background(0);
 // movingRect.x=mouseX  
 // movingRect.y=mouseY
  /*if(isTouching(movingRect,fixedRect))
  {
    obj1.shapeColor="green"
    obj2.shapeColor="green"
  }
  else{
    obj1.shapeColor="red"
        obj2.shapeColor="red"
   }*/
   bounceOff(movingRect,fixedRect)
  drawSprites();
}