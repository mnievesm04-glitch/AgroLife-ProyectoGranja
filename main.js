// 1. Cargar o inicializar partida
let partida = JSON.parse(localStorage.getItem('partidaAgroLife')) || {
    granjero: "Granjero",
    dinero: 100,
    energia: 100,
    inventario: { tomate: 5, trigo: 5, calabaza: 5 }
};

// 2. Función única para actualizar toda la interfaz (HUD e Inventario)
function actualizarHUD() {
    // Dinero
    const displayDinero = document.getElementById('display-dinero');
    if (displayDinero) displayDinero.innerText = partida.dinero;

    // Nombre
    const displayNombre = document.getElementById('display-nombre');
    if (displayNombre) displayNombre.innerText = partida.granjero;

    // Cantidades de semillas en la barra
    const tmt = document.getElementById('cant-tomate');
    const trg = document.getElementById('cant-trigo');
    const cal = document.getElementById('cant-calabaza')
    if (tmt) tmt.innerText = partida.inventario.tomate;
    if (trg) trg.innerText = partida.inventario.trigo;
    if (cal) cal.innerText = partida.inventario.trigo;
}

// 3. Función para guardar
function guardarPartida() {
    localStorage.setItem('partidaAgroLife', JSON.stringify(partida));
    actualizarHUD();
}

// 4. Guardado manual con SweetAlert
function manualSave() {
    guardarPartida();
    Swal.fire({
        title: "¡Guardado!",
        text: "Tu progreso está a salvo",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
    });
}

function Tutorial() {
    PequeñoTuto();
    Swal.fire({
        title: "Tutorial",
        text: "Para empezar puedes crear, continuar un partida ya creada anteriormente o borrar una partida",
        text:"Una vez crees o continues la partida te saldran 8 parcelas para poder plantar",
        title: "Y de que vayas a dejar de jugar puedes guradar la partida en el boton de guardar que aparece en la pantalla del juego.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
    });
}


// 6. Tecla R para recargar (Pruebas)
window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r') {
        partida.inventario.tomate += 10;
        partida.inventario.trigo += 10;
        partida.inventario.calabaza += 10;
        guardarPartida();
        console.log("Recarga de emergencia completada");
    }
});


