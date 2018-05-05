 

function setup() {
	
	
    createCanvas( windowWidth , windowHeight , WEBGL  );
   
 
 }

function draw() {
	
//rota todos los objetos en el eje x (rojo)	, azul (y)
//negativo - rotan hacia atras
//rotateX(-0.60)	

//rota con un bucle, 100 velocidad mas lenta
rotateX(frameCount/100)

//evento mouse para manipular el objto
rotateY(mouseY/200)
rotateX(mouseX/200)
	
sphere()

translate(-200,0,0)
torus()
	
//ubicamos los objetos en el canvas con traslate
//horizonta, vertical , profundidad x,y,z

translate(100,-100,-50)
box()	

translate(100,-100,-200)
cone()	



	
   
}

setup();
draw();



