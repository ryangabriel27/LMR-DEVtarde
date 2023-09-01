"use strict";


// let botaoStart = document.querySelector(".start");
// let botaoPause = document.querySelector(".pause");
// let botaoReset = document.querySelector(".reset");
let horas = 0;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;

let cron;

// botaoStart.addEventListener('click',start());
document.cronometro.start.onclick = () => start();
document.cronometro.pause.onclick = () => pause();
document.cronometro.reset.onclick = () => reset();


function start() {
    // alert('iniciado');
    pause();
    cron = setInterval(cronometro, 10);
}

function pause() {
    // alert('pause');
    clearInterval(cron);
}

function reset() {
    // alert('reset');
    horas = 0;
    minutos = 0;
    segundos = 0;
    milisegundos = 0;
    document.getElementById('horas').innerText = '00';
    document.getElementById('minutos').innerText = '00';
    document.getElementById('segundos').innerText = '00';
    document.getElementById('milisegundos').innerText = '000';
}

function cronometro() {
    if ((milisegundos += 10) == 1000) {
        milisegundos = 0;
        segundos++;
    } else if (segundos == 60) {
        segundos = 0;
        minutos++;
    } else if (minutos == 60) {
        minutos = 0;
        horas++;
    }

    document.getElementById('horas').innerText = returnData(horas);
    document.getElementById('minutos').innerText = returnData(minutos);
    document.getElementById('segundos').innerText = returnData(segundos);
    document.getElementById('milisegundos').innerText = returnData(milisegundos);
}

function returnData(input) {
    // Concatena 0 a nºs < 10
    return input >= 10 ? input : `0${input}`;
}


