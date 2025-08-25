/*
PROGRAMA: Juego del numero secreto;
AUTOR: Santiago Holguin Bermudez
FECHA: 2025
LICENCIA: MIT 
*/
import {asignarTexto, deshabilitarBoton, habilitarBoton, vaciarInput} from "./utils.js";

let numeroSecreto = 0;
let numeroUsuario = 0;
let numeroRepetidos = [];
let intentos = 0;
let modoDeJuego = 0;
let rango = 0;


//Mensajes de Bienvenida Iniciales
function condicionesIniciales(){
    asignarTexto('h1', "Juego numero secreto");
    asignarTexto('p', "Elije el modo de juego que mas te guste");
    habilitarBoton('normal');
    deshabilitarBoton('reiniciar');
    deshabilitarBoton('intentoUsuario');
    return;
}
//Elegir el modo de normal
function modoNormal(){
    //Cambiar modo de juego
    modoDeJuego = "Normal";
    intentos = 0
    //Texto de establecimiento de rango
    asignarTexto('p', `Ingresa el rango con el que quieres jugar`);
    //deshabilitar botones de modo de juego
    deshabilitarBoton('normal');
    //Habilitar boton para definir el rango
    habilitarBoton('establecerRango');
}

//Definir el rango
function definirRango(){
    deshabilitarBoton('establecerRango')
    //Conseguir dato ingresado
    rango =  parseInt(document.getElementById('respuestas').value);
    vaciarInput()
    //Mensaje despues de organizar el rango
    asignarTexto('h1', `Elegiste el modo de juego ${modoDeJuego}`);
    asignarTexto('p', `Ingresa un numero del 1 al ${rango}`);
      //Generar el numero secreto
    generarNumeroSecreto();
    console.log(numeroSecreto)
    console.log(rango)
    console.log(typeof(rango))
    //Adivinar el numero secreto
    habilitarBoton('intentoUsuario');
    return;
}
//Generar numeroSecreto
function generarNumeroSecreto(){
    numeroSecreto = Math.floor(Math.random() * rango) + 1;
    if (numeroRepetidos.includes(numeroSecreto)){
        if (numeroRepetidos.length == rango){
            numeroRepetidos = [];
            generarNumeroSecreto();
        }
        generarNumeroSecreto()
    }else{
        numeroRepetidos.push(numeroSecreto);
    }
    return;
}
//Adivinar el numero secreto
function adivinaElNumero(){
    asignarTexto('h1', `Juego del numero secreto ${modoDeJuego}`);
    asignarTexto('p', `Ingresa un numeor del 1 al ${rango}`);
    intentos++;
    numeroUsuario = parseInt(document.getElementById('respuestas').value);
    if ( numeroUsuario === numeroSecreto){
        asignarTexto('h1', `Felicidades ganaste en: ${intentos} ${intentos== 1 ? "Intento" : "Intentos"}`);
        asignarTexto('p', "Si deseas seguir, dale en el boton jugar de nuevo");
        habilitarBoton('reiniciar');
        deshabilitarBoton('intentoUsuario');
        vaciarInput();
    }else if (numeroUsuario > numeroSecreto){
        asignarTexto('h1', "No te rindas, sigue intentando");
        asignarTexto('p', `El numero secreto es menor: ${numeroUsuario}.`)
        vaciarInput();
    }
    else if(numeroUsuario < numeroSecreto){
        asignarTexto('h1', "No te rindas, sigue intentando");
        asignarTexto('p', `El numero secreto es mayor: ${numeroUsuario}.`)
        vaciarInput();
    }else{
        intentos--;
        asignarTexto('h1', "No te rindas, sigue intentando");
        asignarTexto('p', `ingresa un valor valido`)
    }
} 
//Repetir el juego con las condiciones iniciales
function jugarDeNuevo(){
    condicionesIniciales();
}

condicionesIniciales();
document.getElementById("normal").addEventListener("click", modoNormal);
document.getElementById("establecerRango").addEventListener("click", definirRango);
document.getElementById("intentoUsuario").addEventListener("click", adivinaElNumero);
document.getElementById("reiniciar").addEventListener("click", jugarDeNuevo);


