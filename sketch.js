const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;

var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7;

var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;

var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;

var BlockCyan1, BlockCyan2, BlockCyan3

var polygon1;

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();

  world = engine.world

  ground1 = new Ground(350, 300, 320, 20);

  //first level
  BlockBlue1 = new Box(400, 182, 20, 20);

  BlockBlue2 = new Box(420, 182, 20, 20);

  BlockBlue3 = new Box(440, 182, 20, 20);

  BlockBlue4 = new Box(460, 182, 20, 20);

  BlockBlue5 = new Box(480, 182, 20, 20);

  BlockBlue6 = new Box(500, 182, 20, 20);

  BlockBlue7 = new Box(520, 182, 20, 20);

  //second level
  BlockPink1 = new BoxPink(408, 2, 20, 20);

  BlockPink2 = new BoxPink(428, 2, 20, 20);

  BlockPink3 = new BoxPink(448, 2, 20, 20);

  BlockPink4 = new BoxPink(468, 2, 20, 20);

  BlockPink5 = new BoxPink(488, 2, 20, 20);


  //third level
 
  /*BlockCyan1 = new BoxCyan(401, -10, 20, 20);

  BlockCyan2 = new BoxCyan(420, -10, 20, 20);

  BlockCyan3 = new BoxCyan(240, -10, 20, 20);*/
  

  polygon_1 = new poly(110, 100, 20, 20);

  sling = new SlingShot(polygon_1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);
  ground1.display();

  BlockBlue1.display();
  BlockBlue2.display();
  BlockBlue3.display();
  BlockBlue4.display();
  BlockBlue5.display();
  BlockBlue6.display();
  BlockBlue7.display();
  BlockPink1.display ();
  BlockPink2.display ();
  BlockPink3.display ();
  BlockPink4.display ();
  BlockPink5.display ();
  //BlockCyan1.display ();
 // BlockCyan2.display ();
 // BlockCyan3.display ();
  
  
  polygon_1.display();

  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}