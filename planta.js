document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('granja-grid');
    if (!grid) return;

    for (let i = 0; i < 8; i++) {
        const div = document.createElement('div');
        div.className = 'parcela';
        div.dataset.estado = 'vacio';
        div.innerText = "🟫";

        div.onclick = () => {
            const slotSeleccionado = document.querySelector('.slot.selected');
            const itemID = slotSeleccionado ? slotSeleccionado.dataset.item : null;

            // --- LÓGICA DE COSECHA ---
            if (div.dataset.estado === 'listo') {
                const tipo = div.dataset.cultivo;
                // Accedemos al precio de venta definido en la CLASE
                partida.dinero += CATALOGO[tipo].precioVenta;
                div.innerText = "🟫";
                div.dataset.estado = 'vacio';
                actualizarHUD();
                guardarPartida();
                return;
            }

            if (div.dataset.estado === 'vacio' && CATALOGO[itemID]) {
                const infoCultivo = CATALOGO[itemID]; // Obtenemos el objeto creado en Clase.js

                if (partida.inventario[infoCultivo.nombre] > 0) {
                    partida.inventario[infoCultivo.nombre]--;
                    div.dataset.estado = 'creciendo';
                    div.dataset.cultivo = itemID;

                    // Usamos el emoji de semilla definido en la CLASE
                    div.innerText = infoCultivo.emojiSemilla;
                    actualizarHUD();

                    // EL TEMPORIZADOR: Ahora pilla el tiempo exacto de la CLASE
                    setTimeout(() => {
                        div.innerText = infoCultivo.emojiFinal; // Emoji final de la CLASE
                        div.dataset.estado = 'listo';
                    }, infoCultivo.tiempo); // <--- Aquí está la conexión mágica

                } else {
                    Swal.fire("Sin semillas", "No tienes semillas de este tipo", "warning");
                }
            }
        };
        grid.appendChild(div);
    }
});