class Producto {

    /**
     * 
     * @param {String}        nombre 
     * @param {Number}        precio 
     * @param {Number}        ID
     * @param {Inventario}    elInventario 
     * @param {Proveedor[]}   proveedor 
     */
    constructor(nombre, precio, ID, proveedor) {
        this.nombre = nombre;
        this.precio = precio;
        this.ID = ID;
        this.proveedor = proveedor;

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