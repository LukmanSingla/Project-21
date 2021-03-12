var bullet,wall,speed,deformation,weight,thickness;

function setup() {
  createCanvas(windowWidth,windowHeight/2);
  bullet=createSprite(200, height/2, 50, 10);
  bullet.shapeColor="white";
  wall=createSprite(width-60,height/2,30,100);
  wall.shapeColor="aquaMarine";
}

function draw() {
  background(0,0,0);  
  drawSprites();
  release();
}

function release(){
   if(mouseWentDown("left")){
     bullet.x=200;
     bullet.y=height/2;
     speed=Math.round(random(20,80));
     weight=Math.round(random(2000,3100));
     bullet.velocityX=speed;
     bullet.shapeColor="white";
     thickness=Math.round(random(20,50));
     wall.width=thickness;
     wall.shapeColor="white";
   }
   if(bullet.x-wall.x<=wall.width/2+bullet.width/2 && 
    wall.x-bullet.x<=wall.width/2+bullet.width/2 ){
       bullet.velocityX=0;
       deformation=(0.5*speed*speed*weight)/(thickness*thickness*thickness);
       if(deformation>180){
         wall.shapeColor="red";
       }else if(deformation>80){
         wall.shapeColor="yellow";
       }else{
         wall.shapeColor="lightGreen";
       }
    }
}
