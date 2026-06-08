window.onload = function(){

const relogio =
document.getElementById("relogio");

const alertas =
document.getElementById("alertas");

const status =
document.getElementById("status");

const temperatura =
document.getElementById("temperatura");

const lista =
document.getElementById("listaEventos");

let contador = 0;

function atualizarRelogio(){

    const agora = new Date();

    relogio.innerHTML =
    agora.toLocaleString();
}

setInterval(
    atualizarRelogio,
    1000
);

atualizarRelogio();

function adicionarEvento(texto){

    const item =
    document.createElement("li");

    item.innerHTML =
    new Date().toLocaleTimeString()
    + " - " + texto;

    lista.prepend(item);
}

setInterval(()=>{

    let temp =
    Math.floor(Math.random()*15)+20;

    temperatura.innerHTML =
    temp + "°C";

},3000);

document
.getElementById("incendio")
.onclick = function(){

    contador++;

    alertas.innerHTML =
    contador;

    status.innerHTML =
    "INCÊNDIO";

    status.style.color =
    "red";

    adicionarEvento(
    "Incêndio detectado por satélite"
    );

    alert(
    "🔥 ALERTA DE INCÊNDIO"
    );
};

document
.getElementById("tempestade")
.onclick = function(){

    contador++;

    alertas.innerHTML =
    contador;

    status.innerHTML =
    "TEMPESTADE SOLAR";

    status.style.color =
    "orange";

    adicionarEvento(
    "Tempestade solar detectada"
    );

    alert(
    "⚡ TEMPESTADE SOLAR"
    );
};

document
.getElementById("falha")
.onclick = function(){

    contador++;

    alertas.innerHTML =
    contador;

    status.innerHTML =
    "FALHA DE COMUNICAÇÃO";

    status.style.color =
    "#6c63ff";

    adicionarEvento(
    "Falha de comunicação orbital"
    );

    alert(
    "📡 SATÉLITE SEM SINAL"
    );
};

document
.getElementById("normal")
.onclick = function(){

    status.innerHTML =
    "OPERACIONAL";

    status.style.color =
    "lime";

    adicionarEvento(
    "Sistema restaurado"
    );
};

};