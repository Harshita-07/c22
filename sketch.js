const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;

var engine,world, object
function setup(){
  var canvas=createCanvas(400,400);
  engine = Engine.create();
  world  = engine.world;
  
  var object_option = {
    isStatic : true 
  }
  object = Bodies.rectangle(100, 300, 50, 50, object_option);
  World.add(world,object)
  
  console.log(object.position.x)
  console.log(object.position.y)

}
function draw()
{
  background(0);
  rectMode(CENTER);
    rect(200,200,50,50);
  
  Engine.update(engine)
    rect(object.position.x, object.position.y, 50, 50)
}





























