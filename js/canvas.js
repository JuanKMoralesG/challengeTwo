function tableroJuego(){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    pincel.fillStyle = "#F3F5FC"; //propiedad
    pincel.fillRect(0,0,1280,800); //función	
}

tableroJuego();
