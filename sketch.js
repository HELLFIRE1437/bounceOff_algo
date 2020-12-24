var fixedRect,movingRect; 

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 5 ;
  movingRect=createSprite(400,600,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5 ;
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if((movingRect.x - fixedRect.x <= movingRect.width / 2 + fixedRect.width / 2) 
  && (fixedRect.x - movingRect.x <= movingRect.width /2 + fixedRect.width / 2)){
    movingRect.velocityX = movingRect.velocityX*(-1);
    fixedRect.velocityX = fixedRect.velocityX*(-1);
  }
  if((fixedRect.y - movingRect.y <= movingRect.height / 2 + fixedRect.height / 2)
  && (movingRect.y - fixedRect.y <= movingRect.height / 2 + fixedRect.height / 2)){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
}