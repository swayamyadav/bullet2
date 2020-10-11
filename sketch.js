var wall ,thickness;
var bullet, speed ,weight;
var damage;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);

  wall = createSprite(1200,200,thickness,height/2)

   bullet = createSprite(50,200,80,40)
   bullet.shapeColor = "white";

  speed=random(223,321)
  weight =random(30,52)

bullet.velocityX=(speed*3)/100;

damage = Math.round((0.5*weight*speed*speed)/(thickness*thickness*thickness))
}

function draw() {
  background(0,0,0);  

if(hascollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5 *weight* speed* speed/(thickness*thickness *thickness);

  fill("white");
  textSize(40);
  text("Damage: "+ damage, 750, 350);

  if(damage >10)
{
  wall.shapeColor = color(255,0,0);
 
  fill("red");
  textSize(60);
  text("Wall not Approved", 550, 100);
}

if(damage<10)
{
  wall.shapeColor = color(0,255,0);
  fill("green");
  textSize(60);
  text("Wall Approved", 550, 100);

}
}


  drawSprites();
}

function  hascollided(bullet,lwall){
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    bullet.velocityX=0;
     return true;
  }
  return false 
}