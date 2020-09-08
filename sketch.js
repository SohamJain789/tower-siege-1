const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  stand1 = new Ground(300,200,50,10)

  engine = Engine.create();
    world = engine.world;

}

function draw() {
  background(255,255,255);
   Engine.update(engine);
   stand1.display();  
  drawSprites();
}