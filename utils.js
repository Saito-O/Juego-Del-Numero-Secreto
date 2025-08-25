//Herramientas de javaScript -> Recordar que se tiene que enlazar con el html y importar en el js
//Codigo Reutilizable: 
export function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

export function deshabilitarBoton(id){
    let estadoBoton = document.getElementById(id);
    estadoBoton.setAttribute('disabled', true);
    return;
}

export function habilitarBoton(id){
    let estadoBoton = document.getElementById(id);
    estadoBoton.removeAttribute('disabled');
    return;
}

export function cambiarNombreBoton(id, texto){
    return document.getElementById(id).textContent = texto;
}

export function vaciarInput(){
    return document.getElementById('respuestas').value = " ";
}