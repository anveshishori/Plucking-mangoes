
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){

	boy = loadImage("Plucking mangoes images/boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height-10,width,30);
	tree = new Tree(width-300,350);
	
	stone = new Stone(100,150,30);
	sling = new Catapoult({x:150,y:470},stone.body)

	m1 = new Mango(700,200,30);
	m2 = new Mango(800,240,30);
	m3 = new Mango(900,180,20);
	m4 = new Mango(1000,230,30);
	m5 = new Mango(750,210,30);
	m6 = new Mango(800,170,30);
	
	
	
	
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

 	 tree.display();
	ground.display();
	
	text("Press SPACE to try another shot!!!",100, 50);
	imageMode(CENTER)
	image(boy,200,550,180,350);
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();

	stone.display();
	
	sling.display();

	detectCollision(stone,m1);
	detectCollision(stone,m2);
	detectCollision(stone,m3);
	detectCollision(stone,m4);
	detectCollision(stone,m5);
	detectCollision(stone,m6);
	

  
 
}
function mouseDragged(){


	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

	sling.fly();
}

function keyPressed(){

	if (keyCode === 32) {

		Matter.Body.setPosition(stone.body, {x:100 ,y:500 })
		sling.attach(stone.body);

	}

}

function detectCollision(st,mango){

stposition = st.body.position
mangoposition = mango.body.position

var distance = int(dist(stposition.x,stposition.y,mangoposition.x,mangoposition.y));
console.log(distance)
if(distance< st.radius + mango.radius){
	
	Matter.Body.setStatic(mango.body, false);	
}


}