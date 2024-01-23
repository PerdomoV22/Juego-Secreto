let numeroSecreto = 0;
let numeroIntento = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function condicionesIniciales() {
    asignarTextoElemento('h1', '¡Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntento = 1;
}

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`¡Felicidades, GANASTE! lo lograste en ${numeroIntento} ${numeroIntento === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        numeroIntento++;
        limpiarCaja();
    }

    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    // Si ya la lista llego al numero maximo de intentos para el juego
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else {
        // Si el numero generado ya existe, generar otro
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = " ";
}

function reiniciarJuego() {
    //Limipar la caja
    limpiarCaja();
    //Indicar mensaje de intervalos de numeros
    condicionesIniciales();
    //Deshabilitar el boten de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
