const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6

function setup() {
  createCanvas(1500,500);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  stand1 = new Ground(400,300,300,20)
  stand2 = new Ground(1190,380,300,20)
  //you are trying to create the ground before creating the physics engine & the world
  //engine = Engine.create();
  //world = engine.world;
  block1 = new Box(400,290,30,40);

}

function draw() {
  background(0,0,0);
   Engine.update(engine);
   stand1.display(); 
   stand2.display();

   block1.display(); 
  //drawSprites();
}