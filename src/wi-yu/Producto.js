class Producto {

    /**
     * 
     * @param {String}        nombre 
     * @param {Number}        precio 
     * @param {Number}        ID 
     */
    constructor(ID, nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.ID = ID;

        /** @type {DetalleVenta[]}*/
        this.lasVentas = [];

        /** @type {Number} */
        this.cantidad = 0;
    }

    /**
     * 
     * @param {Number} unidades 
     */
    añadirUnidades(unidades) {
        this.cantidad += unidades;
    }

    /**
     * 
     * @param {Number} unidades 
     */
    extraerUnidades(unidades) {
        this.cantidad -= unidades;
    }
}