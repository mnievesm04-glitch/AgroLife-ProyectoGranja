// 1. Cargar o inicializar partida
let partida = JSON.parse(localStorage.getItem('partidaAgroLife')) || {
    granjero: "Granjero",
    dinero: 100,
    energia: 100,
    inventario: { tomate: 5, trigo: 5, calabaza: 0, sandia: 0, cebolla: 0 }
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
    if (tmt) tmt.innerText = partida.inventario.tomate;
    if (trg) trg.innerText = partida.inventario.trigo;
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

// 5. Selección de slots de la barra
document.addEventListener('DOMContentLoaded', () => {
    actualizarHUD(); // Cargar datos al abrir
    const slots = document.querySelectorAll('.slot');
    slots.forEach(slot => {
        slot.addEventListener('click', () => {
            slots.forEach(s => s.classList.remove('selected'));
            slot.classList.add('selected');
            console.log("Seleccionado para usar:", slot.dataset.item);
        });
    });
});

// 6. Tecla R para recargar (Pruebas)
window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r') {
        partida.inventario.tomate += 10;
        partida.inventario.trigo += 10;
        guardarPartida();
        console.log("Recarga de emergencia completada");
    }
});