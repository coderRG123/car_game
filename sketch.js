
var mbox, fbox;
var speed;
function setup() {
  createCanvas(800,400);

  mbox=createSprite(100, 200, 10, 10);
  mbox.shapeColor="black";

  fbox=createSprite(700, 200, 10, 300);
  fbox.shapeColor="black";

  speed=random(50, 90)
}

function draw() {
  background(255, 255,255);  
mbox.velocityX=speed;
mbox.bounce(fbox);
   fbox.x=700

if (fbox.x-mbox.x<mbox.width/2+fbox.width/2+10){
  if (speed<70){
    mbox.velocityX=0;
    fbox.x=700;
    
  mbox.shapeColor="green";
  }
}
  if (fbox.x-mbox.x<mbox.width/2+fbox.width/2+10){
    if (speed>70){
      mbox.velocityX=0;
    fbox.x=700;
    
      mbox.shapeColor="red";
    }
    
  }
  
  if (fbox.x-mbox.x<mbox.width/2+fbox.width/2+10){
    if (speed===70){
      mbox.velocityX=0;
    fbox.x=700;
    
      mbox.shapeColor="yellow";
    }
    
  }
  drawSprites();
}