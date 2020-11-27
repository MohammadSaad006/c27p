
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
var myEngine,myWorld
var circle1;
var circle2,circle3,circle4,circle5;
var stand1
var chane1,chane2,chane3,chane4,chane5
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	myEngine= Engine.create();
   myWorld= myEngine.world;
  engine = Engine.create();
	world = engine.world;
  stand1=new Stand(200,400,400,20)
  circle1=new Activecircle(680,400,30);
   circle2=new Circle(420,400,30);
   circle3=new Circle(480,400,30);
   circle4=new Circle(540,400,30);
   circle5=new Circle(600,400,30);
   chane1=new Pandulam(circle2.body,{x:400,y:100})
   chane2=new Pandulam(circle3.body,{x:450,y:100})
   chane3=new Pandulam(circle4.body,{x:500,y:100})
   chane4=new Pandulam(circle5.body,{x:550,y:100})
   chane5=new Pandulam(circle1.body,{x:600,y:100})

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  chane1.display();
  chane2.display();
  chane3.display();
  chane4.display();
  chane5.display(); 
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  stand1.display();
 
  

}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {

    Matter.Body.applyForce(circle1.body,circle1.body.position,{x:150,y:-145});

  }

}

