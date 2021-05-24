class DetalleVenta {

    /**
     * 
     * @param {Venta}       venta 
     * @param {Producto}    producto 
     * @param {Cantidad}    catidad 
     */
    constructor(venta, producto, catidad) {
        this.venta = venta;
        this.producto = producto;
        this.catidad = catidad;
    }

    añadirUnidad() {

    }
}

class Venta extends Transacion {

    /**
     * 
     * @param {Number}  monto 
     * @param {Date}    fecha 
     * @param {Cliente} elCliente 
     */
    constructor(monto, fecha, elCliente) {
        super("Venta", "NA", monto, fecha);

        /** @type {Cliente} */
        this.elCliente = elCliente;

        /** @type {DetalleVenta[]} */
        this.losProductos = [];
    }

    /**
     * 
     * @param {Producto} producto 
     * @param {Number} cantidad 
     */
    añadirProducto(producto, cantidad) {
        detalleVenta = new this.DetalleVenta(producto, cantidad);

        producto.lasVentas.push(detalleVenta);
        this.losProductos.push(detalleVenta);
    }
}