if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(muestraPosicion);
}


function muestraPosicion(pos){
  alert(`Tu posición es: (${position.coords.latitude}, ${position.coords.longitude})`);
}
