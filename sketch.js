
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stone,groundObject, launcherObject;
var mango1,mango2,mango3,mango4;
var world,boy,chain;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone=new Stone(255,420,30,30);
	chain=new Chain(stone.body,{x:240,y:420});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  chain.display();
  groundObject.display();
  stone.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}



 function mouseReleased(){
     chain.fly();
 }
// function detectcolliosion(lstone,lmango){
// 	mangoBodyPosition=lmango.body.position;
// 	stoneBpdyPosition=lstone.body.position;

// 	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoPosition.x, mangoBodyPosition.y);
// 	if(distance<=lmango.r+lstone.r){
// 		Matter.Body.setStatic(lmango.body,false);
// 	}
// }
// function keyPressed(){
// 	if (keyCode === 32){
// 		Matter.Body.setPosition(stone.body, {x:255, y:420})
// 		launcherObject.attach(stone.body)
// 	}

// }