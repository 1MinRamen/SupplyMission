var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottomSquare,rightSquare,leftSquare;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	bottomSquareSprite = createSprite(400,650,200,20);
	bottomSquareSprite.shapeColor = color("red");
 
	rightSquareSprite = createSprite(300,600,20,100);
	rightSquareSprite.shapeColor = color("red");
 
	leftSquareSprite = createSprite(500,600,20,100);
	leftSquareSprite.shapeColor = color("red");


	bottomSquare = Bodies.rectangle(400,630,200,20, {isStatic:true});
	World.add(world, bottomSquare);

	rightSquare = Bodies.rectangle(280,600,20,100, {isStatic:true});
	World.add(world, rightSquare);

	leftSquare = Bodies.rectangle(520,600,20,100, {isStatic:true});
	World.add(world, rightSquare);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
if (packageBody.position.y < 400){
 	if (keyCode === DOWN_ARROW) {
    	// Look at the hints in the document and understand how to make the package body fall only on
    	Matter.Body.setStatic(packageBody,false);
  	}
  	else if (keyCode === RIGHT_ARROW){
	  helicopterSprite.x = helicopterSprite.x + 20;
	  translation = {x:20,y:0};
	  Matter.Body.translate(packageBody,translation);
  	}
  	else if (keyCode === LEFT_ARROW){
		helicopterSprite.x = helicopterSprite.x - 20;
		translation = {x:-20,y:0};
		Matter.Body.translate(packageBody,translation);
}
}
else if (packageBody.position.y > 400){
	if (keyCode === RIGHT_ARROW){
		helicopterSprite.x = helicopterSprite.x + 20;
	}
	else if (keyCode === LEFT_ARROW){
		helicopterSprite.x = helicopterSprite.x - 20;
	}
}
}