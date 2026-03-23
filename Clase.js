// Definición de la clase Cultivo: Es el "molde" para crear cualquier planta del juego
class Cultivo {
    constructor(id, nombre, tiempo, emojiSemilla, emojiFinal, precioVenta) {
        this.id = id;               // ID técnico (ej: 'semilla_tomate')
        this.nombre = nombre;       // Nombre para el inventario (ej: 'tomate')
        this.tiempo = tiempo;       // Tiempo de crecimiento en milisegundos
        this.emojiSemilla = emojiSemilla; // Icono mientras crece
        this.emojiFinal = emojiFinal;     // Icono cuando está listo
        this.precioVenta = precioVenta;   // Dinero que da al cosechar
    }
}

// Creamos el CATÁLOGO usando el molde (la clase Cultivo)
// Ahora, si cambias el tiempo aquí, se cambiará automáticamente en todo el juego
const CATALOGO = {
    'semilla_tomate': new Cultivo('semilla_tomate', 'tomate', 5000, "🌱", "🍅", 20),
    'semilla_trigo': new Cultivo('semilla_trigo', 'trigo', 8000, "🌱", "🌾", 15)
};