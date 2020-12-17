var car;
var wall;
var speed;
var weight;


function setup(){
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  speed=random(55,90)
  weight=random(400,1500)
  car.shapeColor=color(255)
  car.velocityX=speed;

  
 

  wall=createSprite(800,200,50,height/2);
  wall.shapeColor="grey"
 

   

}

function draw(){
background("black");
if(wall.x-car.x <(car.width+wall.width)/2)
{
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22509
if(deformation>180)
{
  car.shapeColor=color(255,0,0)
}
if(deformation<180 && deformation>100)
{
  car.shapeColor=color(230,230,0)
}
if(deformation<100)
{
  car.shapecolor=color(0,255,0)
}
}
drawSprites();
}