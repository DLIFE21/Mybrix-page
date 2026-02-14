// -------- CONTADOR --------
const fechaInicio = new Date("2025-07-27T00:00:00");

function actualizarTiempo() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("tiempo").innerHTML =
    `${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}
setInterval(actualizarTiempo, 1000);

// -------- MAQUINA DE ESCRIBIR --------
const texto = "Para ti, mi persona favorita 🖤🌹";
let i = 0;

function escribir() {
  if (i < texto.length) {
    document.getElementById("titulo").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escribir, 60);
  }
}
escribir();

// -------- REVELAR --------
function mostrarMensaje() {
  document.getElementById("extra").classList.add("mostrar");

  setTimeout(() => {
    document.getElementById("propuesta").classList.add("mostrar");
    document.body.style.background =
      "linear-gradient(135deg, #1a0010, #33001a)";
  }, 2500);
}

// -------- BOTÓN NO QUE HUYE --------
function moverNo() {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";
}

// -------- ACEPTAR --------
function aceptar() {
  document.body.style.background =
    "linear-gradient(135deg, #ff1493, #000000)";
  alert("Entonces prepárate… porque voy a ser tu San Valentín en todas las versiones de esta vida 🖤✨");
}

// -------- PÉTALOS --------
const canvas = document.getElementById("petalos");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let petalos = [];

for (let i = 0; i < 60; i++) {
  petalos.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 5 + 2,
    speed: Math.random() * 1 + 0.5
  });
}

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff69b4";

  petalos.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    p.y += p.speed;

    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animar);
}

animar();
