let metaHoraInput = document.getElementById("meta_hora");
let metaMinutoInput = document.getElementById("meta_minuto");
let metaSegundoInput = document.getElementById("meta_segundo");

let metaHora = 0;
let metaMinuto = 0;
let metaSegundo = 0;

let metaTime = 0;
let interval;

function definirMeta() {
  metaHora = parseInt(metaHoraInput.value) || 0;
  metaMinuto = parseInt(metaMinutoInput.value) || 0;
  metaSegundo = parseInt(metaSegundoInput.value) || 0;

  metaTime = metaHora * 3600 + metaMinuto * 60 + metaSegundo;
}

function atualizarCronometro(tempo) {
  let horas = Math.floor(tempo / 3600);
  let minutos = Math.floor((tempo % 3600) / 60);
  let segundos = tempo % 60;

  document.getElementById("cronometro").innerText = 
    horas.toString().padStart(2, '0') + ":" +
    minutos.toString().padStart(2, '0') + ":" +
    segundos.toString().padStart(2, '0');

  if (tempo >= metaTime) {
    document.getElementById("cronometro").style.color = "red";
  }
}

function iniciarCronometro() {
  let startTime = new Date().getTime();

  interval = setInterval(function() {
    let currentTime = new Date().getTime();
    let elapsedTime = Math.floor((currentTime - startTime) / 1000);

    atualizarCronometro(elapsedTime);
  }, 1000);
}

window.onload = function() {
  iniciarCronometro();
};
