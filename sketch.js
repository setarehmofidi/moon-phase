let phaseSlider;
let zlider;
let whichDay
let spin;
function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
   phaseSlider = createSlider(-3,3,0,0,1);
   //phaseSlider.position(width/2, 80);
   zlider = createSlider(-3,3,0,0,1);
   //zlider.position(width/4, 80);
   whichDay = createSlider(1,30,15,1);
   whichDay.position(width/2.25, height/8);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
background(0);
push()
    translate(-width/2,-height/2)
    for(i=0;i<10;i++){
      let r=random(1,6)
      ellipse(random(width),random(height),r,r)
       }
pop()

console.log(whichDay.value())
// rotateY(radians(spin%360)) 
drawMoon (whichDay.value(),width*0.1)


 spin++;
}

function drawMoon(day,moonsize){

  moonPhase = phaseSlider.value();
  moonZ= zlider.value();
  //directionalLight(250, 255, 250, -moonPhase,0,moonZ);
    if (day==1){
      directionalLight(200,200,200,-2,0,3)
    }
    if (day==2){
    directionalLight(200,200,200,-3,0,3)
    }
    if (day==3){
    directionalLight(200,200,200,-3,0,2)
    }
    if (day==4){
    directionalLight(200,200,200,-3,0,1.5)
    }
    if (day==5){
    directionalLight(200,200,200,-3,0,1)
    }
    if (day==6){
    directionalLight(200,200,200,-3,0,0.5)
    }
    if (day==7){
    directionalLight(200,200,200,-3,0,0)
    }
    if (day==8){
    directionalLight(200,200,200,-3,0,-0.5)
    }
    if (day==9){
    directionalLight(200,200,200,-3,0,-1)
    }
    if (day==10){
    directionalLight(200,200,200,-3,0,-1.5)
    }
    if (day==11){
    directionalLight(200,200,200,-3,0,-2)
    }
    if (day==12){
    directionalLight(200,200,200,-3,0,-2.5)
    }
    if (day==13){
    directionalLight(200,200,200,-3,0,-3)
    }
    if (day==14){
    directionalLight(200,200,200,-2,0,-3)
    }
    if (day==15){
    directionalLight(200,200,200,0,0,-3)
    }
    if (day==16){
    directionalLight(200,200,200,1,0,-3)
    }
    if (day==17){
    directionalLight(200,200,200,2,0,-3)
    }
    if (day==18){
    directionalLight(200,200,200,2.5,0,-3)
    }
    if (day==19){
    directionalLight(200,200,200,3,0,-3)
    }
    if (day==20){
    directionalLight(200,200,200,3,0,-2.5)
    }
    if (day==21){
    directionalLight(200,200,200,3,0,-2)
    }
    if (day==22){
    directionalLight(200,200,200,3,0,-1.5)
    }
    if (day==23){
    directionalLight(200,200,200,3,0,-1)
    }
    if (day==24){
    directionalLight(200,200,200,3,0,-0.5)
    }
    if (day==25){
    directionalLight(200,200,200,3,0,0)
    }
    if (day==26){
    directionalLight(200,200,200,3,0,0.5)
    }
    if (day==27){
    directionalLight(200,200,200,3,0,1)
    }
    if (day==28){
    directionalLight(200,200,200,3,0,2)
    }
    if (day==29){
    directionalLight(200,200,200,3,0,3)
    }
    if (day==30){
    directionalLight(200,200,200,2,0,3)
    }

 translate(0,0,0)

noStroke();

sphere(moonsize);

}
