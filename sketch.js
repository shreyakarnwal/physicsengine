const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myengine;
var myworld;

var ground, ball;

function setup() {
  createCanvas(600,600);

  var options = {
    isStatic : true,
    area : 5000
  }

  var balloptions = {
    restitution:1.0
  }

  myengine = Engine.create();
  myworld = myengine.world;

  ground = Bodies.rectangle(200,590,1000,20,options);
  World.add(myworld,ground);
  console.log(ground.area);

  ball = Bodies.circle(200,100,20,balloptions);
  World.add(myworld,ball);
  
}

function draw() {
  background(0); 
  Engine.update(myengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1000,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);
}