var pinkcar,orangecar,greencar,yellowcar,road;
var pinkcarImg,greencarImg,orangecarImg,yellowcarImg,roadImg;
var greencarsGroup,orangecarsGroup,pinkcarsGroup,yellowcarsGroup;

function preload(){

pinkcarImg.loadImage("pink car.png");
greencarImg.loadImage("green car.png.png");
orangecarImg.loadImage("orange car.png");
yellowcarImg.loadImage("yellow car.png");
roadImg.loadImage("road.png.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);

road = createSprite(windowWidth,windowHeight);
road.addImage(roadImg);
road.velocityY = -5;
road.scale = 1;

pinkcar = createSprite(400,600,30,30);
pinkcar.addImage("bluecar",bluecarImg);
pinkcar.scale=0.5;

carsGroup = new Group();
}

function draw() {
background(roadImg);

pinkcar.x = World.mouseX
pinkcar.collide(edges);

spawncars();

drawSprites();

function spawncars(){
 if (frameCount % 60 === 0){
   var cars = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
   
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: orangecar.addImage(orangecarImg);
              break;
      case 2: greencar.addImage(greencarImg);
              break;
      case 3: yellowcar.addImage(yellowcarImg);
              break;
      default: break;
    }
}
cars.scale = 0.5;
cars.lifetime = 800;
carsGroup.add(cars);

if(pinkcar.isTouching(carsGroup)){
carsGroup.destroyEach;
road.velocityY = 0;
text("Game Over");
textSize(30);
 
 }
  
  