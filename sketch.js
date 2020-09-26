
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  
  monkey=createSprite(80,305,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=.15;
  
  banana=createSprite(100,200,20,20);
  banana.addImage("Image",bananaImage);
  banana.scale=.1
  
    obstacle=createSprite(200,318,20,20);
  obstacle.addImage("Image",obstaceImage);
  obstacle.scale=.15
  
  
  ground=createSprite(400,350,900,10);
  //ground.velocityX=-4;
  //ground.x=ground.width/2;
  
}


function draw() {
background(255);
  stroke("black");
  textSize(20);
  fill("black");
  text("survivalTime:" +survivalTime,100,50);
  if(monkey.isTouching(banana)){
   survivalTime=survivalTime+1;
  }
  banana.lifetime=300;
  
   if((keyDown("space"))&& monkey.y >= 20) {
    monkey.velocityY = -10;
  }
    monkey.velocityY = monkey.velocityY + 0.8

  
  monkey.collide(ground);
   
  
  drawSprites()
}






