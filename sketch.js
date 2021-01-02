function preload(){
  sound = loadSound("sound123.wav");
}

function setup(){
  createCanvas(600,400);
  sound.loop();
  wall1 = createSprite(260,120,300,3);
  wall2 = createSprite(260,260,300,3);
  wall3 = createSprite(112,145,3,50);
  wall4 = createSprite(112,235,3,50);
  wall5 = createSprite(408,145,3,50);
  wall6 = createSprite(408,235,3,50);
  wall7 = createSprite(89,170,50,3);
  wall8 = createSprite(89,210,50,3);
  wall9 = createSprite(431,210,50,3);
  wall10 = createSprite(431,170,50,3);
  wall11 = createSprite(65,190,3,40);
  wall12 = createSprite(455,190,3,40);
  
  ding = createSprite(90,190,13,13);
  ding.shapeColor = "green";
  
  dong1 = createSprite(170,130,10,10);
  dong1.shapeColor = "red";
  dong2 = createSprite(290,130,10,10);
  dong2.shapeColor = "red";
  dong3 = createSprite(230,250,10,10);
  dong3.shapeColor = "red";
  dong4 = createSprite(350,250,10,10);
  dong4.shapeColor = "red";
  
  dong1.velocityY = 8;
  dong2.velocityY = 8;
  dong3.velocityY = -8;
  dong4.velocityY = -8;
  
  count = 0;
}

function draw(){
  background("white");
  text("Deaths: " + count,200,100);
  strokeWeight(0);
  fill("lightblue")
  rect(64,170,52,40);
  rect(402,170,52,40);
  
  dong1.bounceOff(wall1);
  dong1.bounceOff(wall2);
  dong2.bounceOff(wall1);
  dong2.bounceOff(wall2);
  dong3.bounceOff(wall1);
  dong3.bounceOff(wall2);
  dong4.bounceOff(wall1);
  dong4.bounceOff(wall2);
  
 
  if(keyDown("right")){
    ding.x = ding.x + 2;
  }
  if(keyDown("left")){
    ding.x = ding.x - 2;
  }
  
  if(ding.isTouching(wall11)||
     ding.isTouching(wall12)||
     ding.isTouching(dong1)||
     ding.isTouching(dong2)||
     ding.isTouching(dong3)||
     ding.isTouching(dong4))
  {
     ding.x = 90;
     ding.y = 190;
     count = count + 1;
  }
  
 drawSprites();
}

