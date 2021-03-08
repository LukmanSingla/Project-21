var car,obstacle,speed,deformation,weight,thickness;

function setup() {
  createCanvas(windowWidth,windowHeight/2);
  car=createSprite(200, height/2, 50, 10);
  car.shapeColor="white";
  obstacle=createSprite(width-60,height/2,30,100);
  obstacle.shapeColor="aquaMarine";
}

function draw() {
  background(0,0,0);  
  drawSprites();
  release();
}

function release(){
   if(mouseWentDown("left")){
     car.x=200;
     car.y=height/2;
     speed=Math.round(random(20,80));
     weight=Math.round(random(2000,3100));
     car.velocityX=speed;
     car.shapeColor="white";
     thickness=Math.round(random(20,50));
     obstacle.width=thickness;
     obstacle.shapeColor="white";
   }
   if(car.x-obstacle.x<=obstacle.width/2+car.width/2 && 
    obstacle.x-car.x<=obstacle.width/2+car.width/2 ){
       car.velocityX=0;
       deformation=(0.5*speed*speed*weight)/(thickness*thickness*thickness);
       if(deformation>180){
         obstacle.shapeColor="red";
       }else if(deformation>80){
         obstacle.shapeColor="yellow";
       }else{
         obstacle.shapeColor="lightGreen";
       }
    }
}