var listado=[];
var lineas=[];
var lineasJuego=[];
var tamaño;
var letras;
var palabraSecreta;
var contador=0;
var ganar=false;
var perdiste = false;
var letra=[];
var vacio=0;
var tecla="";

var palabras = document.querySelectorAll(".palabra");
tamaño = palabras.length

for(var i=0; i<palabras.length;i++){
    var lista=palabras[i];
    
    var tdPalabras = lista.querySelector(".info-palabra");
    var palabra = tdPalabras.textContent;
    listado.push(palabra);
}

var botonJugar = document.querySelector("#nuevo-juego");

botonJugar.addEventListener("click",function(event){
    event.preventDefault();
    contador=0;
    letras=[];
    document.getElementById("horca").src="img/horca.png";
    limpiar();
    crearPalabraSecreta();
    lineasPalabra();
    var lineas = document.querySelector("#deletrear");
    lineas.textContent = lineasJuego;
    comprobarLetra();

});

function cambiarImagen(){
    if (contador==1){
        document.getElementById("horca").src="img/cabeza.png";
    }
    if (contador==2){
        document.getElementById("horca").src="img/cuerpo.png";
    }
    if (contador==3){
        document.getElementById("horca").src="img/piernad.png";
    }
    if (contador==4){
        document.getElementById("horca").src="img/piernai.png";
    }
    if (contador==5){
        document.getElementById("horca").src="img/brazod.png";
    }
    if (contador==6){
        document.getElementById("horca").src="img/brazoi.png";
        perder();
    }
}

function crearPalabraSecreta(){
    var aleatorio = Math.round(Math.random()*tamaño);
    if(aleatorio<palabras.length){
        palabraSecreta = listado[aleatorio];
    }
    return palabraSecreta;
}

function lineasPalabra(){
    for(var i=0; i<palabraSecreta.length;i++){
        letras=palabraSecreta[i];
        lineas.push(letras);
        lineasJuego.push(" _ ");
    }

    return lineasJuego;
}        
    
function limpiar(){
    letras = "";
    lineas=[];
    lineasJuego=[];
    contador=0;
    var alerta=document.querySelector("#perdio");
    alerta.textContent = "";
    document.getElementById("horca").src="img/horca.png";
}

function comprobarLetra(){
    vacio=lineasJuego.length;
    console.log(vacio);
    contador=0;
    document.addEventListener("keydown",function(event){
        event.preventDefault();
        var contTemp=0;
        var keyValue = event.key;
        var mayuscula=keyValue.toUpperCase();
        var respuesta = document.querySelector("#deletrear");
        for(var i=0;i<lineas.length;i++){
            if(lineas[i]==mayuscula){
                lineasJuego[i]=mayuscula;
                vacio--;
            }
            else{
                contTemp++;
            }
        }
        if(contTemp==lineas.length){
            contador++;
            cambiarImagen();
        }
        console.log(vacio);
        if(vacio==0){
            ganaste();
        }
        respuesta.textContent = lineasJuego;
        console.log(contador+"-*-");

    });    
}

function perder(){
    var alerta=document.querySelector("#perdio");
    alerta.textContent = "PERDISTE, La Palabra Secreta Era: "+palabraSecreta;
}

function ganaste(){
    var alerta=document.querySelector("#perdio");
    alerta.textContent = "GANASTE, FEICITACIONES!!!";
}
















