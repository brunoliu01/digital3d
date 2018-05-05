 

function setup() {
	
	
    createCanvas( windowWidth , windowHeight , WEBGL  );
   
 
 }

function draw() {
	
sphere()

translate(-200,0,0)
torus()
	
//ubicamos los objetos en el canvas con traslate
//horizonta, vertical , profundidad x,y,z

translate(100,-100,0)
box()	

translate(100,-100,0)
cone()	

//EJERCICIO 1 COMPLETAR SECUENCIA
//translate(100,100,0)
//box()
//
//translate(100,120,0)
//torus()	
   
}

setup();
draw();



