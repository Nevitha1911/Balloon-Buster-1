var redBalloon,pinkBalloon,blueBalloon,greenBalloon,background,bow,arrow;
var rballoon;
var score = 0;
var arrowGroup;

function preload(){
 //load your images here
  background_moving=
    loadImage("background0.png");
 balloon1_still=loadImage("red_balloon0.png");
 
  balloon2_still=loadImage("pink_balloon0.png");
  
  balloon3_still=loadImage("green_balloon0.png");
  
  balloon4_still=loadImage("blue_balloon0.png");
  
  background_moving=loadImage("background0.png");
  
  bow_moving=loadImage("bow0.png");
  
  arrow_moving=loadImage("arrow0.png");
  
}

function setup() {
  createCanvas(600, 550);
  
  
  
  background = createSprite(0,0,0,0);
  background.addImage("moving",background_moving);  
  background.scale = 3;
  background.x = background.width/2 ;
  background.velocityX = -4;
  
  bow = createSprite(550,300,0,0);
  bow.addImage("moving",bow_moving);
  
  arrowGroup = new Group();
  redGroup = new Group();
  pinkGroup = new Group();
  greenGroup = new Group();
  blueGroup = new Group();
 }
  
  
function draw() {
  bow.y = World.mouseY;
  
  
  
  if (background.x<0){
    background.x = background.width/2;
  }
  
  if (keyDown("space")){
    createArrow();
  }
  
  if(arrowGroup.isTouching(redBalloon)){
    score = score+1;
    redBalloon.destroyEach();
    arrowGroup.destroyEach();
  }
  
  if(arrowGroup.isTouching(pinkBalloon)){
    pinkBalloon.destroyEach();
    arrowGroup.destroyEach();
  }
  
  if(arrowGroup.isTouching(greenBalloon)){
    greenBalloon.destroyEach();
    arrowGroup.destroyEach();
  }
  
  if(arrowGroup.isTouching(blueBalloon)){
    blueBalloon.destroyEach();
    arrowGroup.destroyEah();
  }
  
  var rballoon = Math.round(random(1,4));
   if(World.frameCount % 80 == 0){
      if(rballoon == 1){
     redBalloon();
   } else if(rballoon == 2){
     pinkBalloon();
   } else if(rballoon == 3){
      greenBalloon();
   } else if(rballoon == 4){
     blueBalloon();
}
     drawSprites();
    fill("black");
    textSize(34);             
    text("score" +score,270,30);
}
  
  
}
function createArrow(){
  arrow = createSprite(360,100,5,10);
  arrow.velocityX = -4;
  arrow.addImage("moving",arrow_moving);
  arrow.scale = 0.3;
  arrow.lifetime = 100
  arrow.y = bow.y;
  return arrow;
}
function redBalloon(){
  redballoon = createSprite(0,Math.round(random(20,300)),10,10);
  redballoon.addImage("still",balloon1_still);
  redballoon.velocityX = 3;
  redballoon.lifetime = 150;
  redballoon.scale = 0.10;
}
function pinkBalloon(){
  pinkballoon = createSprite(50,Math.round(random(20,370)),10,10);
  pinkballoon.addImage("still",balloon2_still);
  pinkballoon.velocityX = 3;
  pinkballoon.lifetime = 150;  
  pinkballoon.scale = 1.3;
}
function greenBalloon(){
  greenballoon = createSprite(100,Math.round(random(20,370)),10,10);
  greenballoon.addImage("still",balloon3_still);
  greenballoon.velocityX = 3;
  greenballoon.lifetime = 150;
  greenballoon.scale =0.1;
}
function blueBalloon(){
  blueballoon = createSprite(150,Math.round(random(20,370)),10,10);
  blueballoon.addImage("still",balloon4_still);
  blueballoon.velocityX = 3;
  blueballoon.lifetime = 150;
  blueballoon.scale = 0.1;
}

