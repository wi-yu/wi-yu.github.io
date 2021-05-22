class Proveedor {

    /**
     * 
     * @param {String} nombre 
     * @param {Number} NIT 
     */
    constructor(nombre, NIT) {
        this.nombre = nombre;
        this.NIT = NIT;

        /** @type {Producto[]} */
        this.losProductos = [];

        /** @type {Compra[]} */
        this.lasCompras = [];
    }
}