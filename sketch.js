var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var bgImage;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
bgImage = loadImage("bg.jpg");
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for(var i = 75; i<=width-10; i=i+50 ){
    plinkos.push(new Plinko(i,275));
  }

  //create 4th row of plinko objects
  for(var i=50; i<=width-10; i=i+50){
    plinkos.push(new Plinko(i,375));
  }

    
}
 


function draw() {
  background(bgImage);
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //create the particles using frameCount
  if(frameCount%85===0){
    particles.push(new Particles(random(0,800),0))
  }


  //display the particles 
for(var n = 0; n < particles.length;  n++){
  particles[n].display();
}

}