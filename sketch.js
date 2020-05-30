var bullet,wall,disx,diffw,damage,speed,weight,thickness;

function setup(){
createCanvas(400,400);
bullet = createSprite(50,200,20,10);
bullet.shapeColor = "yellow";
speed  = random(223,321);
weight = random(30,52);
bullet.velocityX = 10;



wall = createSprite(370,200,10,400);
wall.shapeColor = "white";
thickness = random(22,83);
}

function draw (){
background("black");
disx = wall.x-bullet.x;
diffw = wall.width/2+bullet.width/2;

if(disx<diffw&&disx>-diffw){
    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    bullet.velocityX = 0;
    if(damage>10){
       wall.shapeColor  = "red"
    }

    if(damage<10){
        wall.shapeColor = "green";
    }
}

drawSprites();
text("speed :"+Math.round(speed),200,100);
text("weight :"+Math.round(weight),200,120);
text("thickness :"+Math.round(thickness),200,140);
}