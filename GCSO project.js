var car,wall
var weight,speed


function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
wall = createSprite (1200,200,60,height/2);

  

  speed=random(55,90);
  weight=random(1500,900)

  car.velocityX = 25,31;
}

function draw() {
  background("black");  

  var deformation=0.5 * weight * speed * speed/22500

  if(wall.x-car.x < (car.width+wall.width)/2);
  if(deformation>180)
  {
  car.velocityX = 0;
  car.x=wall.x-30

if(deformation>180)
{
  car.shapeColor=color("230,230,0")
  wall.shapeColor=color("white")
  
}
if(deformation<180 && deformation>100)
{
car.shapeColor=color("0,255,0")
wall.shapecolor=color("white")

}
if(deformation<100)
{
  car.shapecolor=color("255,0,0")
  wall.shapecolor=color("white")
  
}
}
  drawSprites();
}