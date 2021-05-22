class Venta extends Transaciones {

    /**
     * 
     * @param {Number} IDPedido 
     * @param {Cliente} elCliente 
     */
    constructor(IDPedido, elCliente) {
        this.IDPedido = IDPedido;
        this.elCliente = elCliente;
        this.productos = [];
    }

    /**
     * 
     * @param {Producto} producto 
     */
    añadirProducto(producto) {
        this.productos.push(producto);
    }
}