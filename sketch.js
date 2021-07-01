var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf,orangeleaf
var appleImg,leftImg,orangeleafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png")
  orangeleafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);


  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x = mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  createApple()
  createLeaves()
  createLeaves2()
}

function createApple() {
  if (frameCount % 100 === 0){
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.scale = 0.09
  apple.velocityY = 2
  apple.lifetime = 200
  }
}

function createLeaves() {
  if (frameCount % 80 === 0){
  leaves = createSprite(random(50,350),40,10,10)
  leaves.addImage(leafImg)
  leaves.scale = 0.09
  leaves.velocityY = 2
  leaves.lifetime = 200
  }
}


function createLeaves2() {
  if (frameCount % 120 === 0){
  leaves2 = createSprite(random(50,350),40,10,10)
  leaves2.addImage(orangeleafImg)
  leaves2.scale = 0.09
  leaves2.velocityY = 2
  leaves2.lifetime = 200
  }
}

