function validarYComenzar() {
    // Obtenemos los valores de los inputs
    const nombre = document.getElementById('nombreInput').value.trim();
    const dificultad = document.getElementById('difSelect').value;
    const energia = parseInt(document.getElementById('energiaInput').value);
    const regalo = document.getElementById('cultivoRegalo').value;

    // VALIDACIÓN (Requisito 2.2 del PDF)
    if (nombre === "") {
        Swal.fire("Error", "Debes ponerle un nombre al granjero", "error");
        return;
    }

    if (isNaN(energia) || energia < 50 || energia > 200) {
        Swal.fire("Error", "La energía debe estar entre 50 y 200", "error");
        return;
    }

    // CREAMOS EL OBJETO DE PARTIDA SEGÚN LA DIFICULTAD
    let dineroInicial = 100;
    if (dificultad === "facil") dineroInicial = 300;
    if (dificultad === "dificil") dineroInicial = 50;

    const nuevaPartida = {
        granjero: nombre,
        dinero: dineroInicial,
        energia: energia,
        dificultad: dificultad,
        inventario: {
            tomate: (regalo === 'tomate' ? 10 : 5),
            trigo: (regalo === 'trigo' ? 10 : 5),
            calabaza: 0,
            sandia: 0,
            cebolla: 0
        }
    };

    // GUARDADO INICIAL
    localStorage.setItem('partidaAgroLife', JSON.stringify(nuevaPartida));

    // Vamos al juego
    window.location.href = 'juego.html';
}