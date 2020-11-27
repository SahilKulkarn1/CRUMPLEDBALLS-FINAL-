
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var paperBall;
var bin1, bin2, bin3;
var binIMG;
function preload()
{
	binImg= loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
     

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(600,height,1800,20); 
	paperBall = new Ball(100,200,50,50);
  //bin1= new Bin(800,200,50,50);
  bin1 = new Bin(700,620,30,120);
  bin2= new Bin(900,620,30,120);
  bin3= new Bin(800,680,200,30);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(180);
  ground.display();
  paperBall.display()
  //bin1.display();
 bin1.display();
 bin2.display();
 bin3.display();


 image(binImg,670,500,300,200)
 


}

function keyPressed (){
	if( keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:500,y:-500})
	}
}


