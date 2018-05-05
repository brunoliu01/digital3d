
	
var imagen1;

var a=0;
function setup() {
    createCanvas(windowWidth , windowHeight , WEBGL);
    imagen1 = loadImage("sol.jpg");
  
 
 }



function draw() {
	background(0,0,0);
		rotateY(frameCount/50);
		rotateZ( -mouseY/500);
	
	texture(imagen1);
	sphere(150);
		
}




