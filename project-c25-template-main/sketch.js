const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	dustbin=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,400,1200,20);
	paperBall = new Paper(200,150,70);
	left = new Ground(900,260,20,200);
	right = new Ground(1100,260,20,200);
	bottom = new Ground(1000,350,200,20);
	
	Engine.run(engine);
  
}

function draw() {
  
  background(240);
  
  Engine.update(engine);
  fill("grey")
  ground.display();
  paperBall.display();
  fill(240)
  left.display();
  right.display();
  bottom.display();
  imageMode(CENTER);
  image(dustbin,1000,285,200,213)
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		var option = {
			x:130,
			y:-145
		}
	  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:130,y:-145});  
	}
}