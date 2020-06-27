function setup() {
  createCanvas(800,400);
  fixrect= createSprite(400, 200, 50, 50);
  movingrect=createSprite(40,70,30,30);
  rect1=createSprite(50,100,50,50);
  rect2=createSprite(750,100,50,50);
  rect1.velocityX=4;
  rect2.velocityX=-4;
  rect1.shapeColor="purple";
  rect2.shapeColor="blue";
}

function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if (fixrect.x-movingrect.x<=fixrect.width/2+movingrect.width/2 && movingrect.x-fixrect.x<=fixrect.width/2+movingrect.width/2 && 
    fixrect.y-movingrect.y<=fixrect.height/2+movingrect.height/2 && movingrect.y-fixrect.y<=fixrect.height/2+movingrect.height/2   ){
   fixrect.shapeColor="red";
   movingrect.shapeColor="red";
  }
  else{
    fixrect.shapeColor="green";
    movingrect.shapeColor="green";
  }
  if(rect1.x-rect2.x<=rect1.width/2+rect2.width/2 && rect2.x-rect1.x<=rect2.width/2+rect1.width/2){
    rect1.velocityX=rect1.velocityX*-1
    rect2.velocityX=rect2.velocityX*-1 
  }
  drawSprites();
}
