
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score=0;
var backImage;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 backImage=loadImage("Jungle.jpg");
}



function setup() {
createCanvas (600,600) 
  backgr=createSprite(0,0,800,400); 
  backgr.addImage(backImage); 
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
monkey=createSprite(20,350,10,10);
monkey.addAnimation("Running",monkey_running )  ;
monkey.scale=0.1;  
  //Ground 
  ground=createSprite(400,420,1000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  //new grps 
  FoodGroup =  new  Group();
  obstaclesGroup = new Group() ;
  score=0;

}


function draw() {
  background(255);
  spawnFood();
   spawnObstacles();
    if (ground.x>0) { 
   ground.x=ground.width/2;
  }
  if(backgr.x<100){
   backgr.x=backgr.width/2; 
  }
  //Monkey jump 
  
  if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(ground);  
drawSprites();
  

stroke("black");
textSize(20);
fill("black");
text("Score: "+score,500,50);
 
  
  if(obstaclesGroup.isTouching(monkey)){
ground.velocityX = 0;
monkey.velocityY = 0;
obstaclesGroup.setVelocityXEach(0);
 FoodGroup.setVelocityXEach(0);
obstaclesGroup.setLifetimeEach(-1);
 FoodGroup.setLifetimeEach(-1); 
  backgr.velocityX=0;

  }
  if(FoodGroup.isTouching(monkey)){
    score=score+2
  }
}



function spawnFood(){
  if(frameCount%80===0){
  
 banana=createSprite(600,250,40,10);
  banana.velocityX=-5
  banana.y=random(100,240);
  banana.addImage("banana",bananaImage)
  banana.scale=0.1
    //Banana lifetime and depth
    monkey.depth = banana.depth + 1;
    banana.lifeTime=250
    //Adding bananas
    FoodGroup.add(banana);
    
    //Touching 
     
  
    }
  }

function spawnObstacles(){
if(frameCount % 120 === 0) {
    obstacle = createSprite(800,400,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 290;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }

  
}






