
function preload(){
  BTank1IMG=loadImage("images/BTank1.png");
  BTank2IMG=loadImage("images/BTank2.png");
  BTank3IMG=loadImage("images/BTank3.png");
  BTank4IMG=loadImage("images/BTank4.png");
  RTank1IMG=loadImage("images/RTank1.png");
  RTank2IMG=loadImage("images/RTank2.png");
  RTank3IMG=loadImage("images/RTank3.png");
  RTank4IMG=loadImage("images/RTank4.png");

  BG1IMG=loadImage("images/Hit-the-Beach.jpg");

  SB1IMG=loadImage("images/StartButton.jpg");
}
function setup() {
  createCanvas(700,600);
  
  wall1=createSprite(130, 50,20, 120);
  wall1.shapeColor="darkgreen";
  wall2=createSprite(70, 160,300, 20);
  wall2.shapeColor="darkgreen";
  wall3=createSprite(240,160,300,20);
  wall3.shapeColor="darkgreen";
  wall4=createSprite(260, 50,20, 120);
  wall4.shapeColor="darkgreen";

   wall5 = createSprite(380,100,20,120);
 wall5.shapeColor = "darkgreen";

   wall6 = createSprite(455,120,20,250);
 wall6.shapeColor = "darkgreen";

   wall7 = createSprite(400,235,120,20);
 wall7.shapeColor = "darkgreen";

   wall8 = createSprite(335,285,20,120);
 wall8.shapeColor = "green";

   wall9 = createSprite(140,400,20,120);
 wall9.shapeColor = "red";

   wall12 = createSprite(250,200,120,20);
 wall12.shapeColor = "darkgreen";

   wall13 = createSprite(280,285,20,120);
 wall13.shapeColor = "darkgreen";

   wall14 = createSprite(250,200,120,20);
 wall14.shapeColor = "darkgreen";

   wall15 = createSprite(230,350,20,120);
 wall15.shapeColor = "darkgreen";

   wall10 = createSprite(330,350,20,120);
 wall10.shapeColor = "darkgreen";

   wall11 = createSprite(374,250,20,120);
 wall11.shapeColor = "darkgreen";

}

function draw() {
  background("black");  
  drawSprites();
  
  textSize(30); 
  fill("white"); 
  text(mouseX + "," + mouseY,30,30);
}