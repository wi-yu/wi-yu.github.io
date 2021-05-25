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

class Venta extends Transacción {

    /**
     * @param {String}      ID              ID de la venta (Hexadecimal) 
     * @param {Number}  monto 
     * @param {Date}    fecha 
     * @param {Cliente} elCliente 
     */
    constructor(ID, monto, fecha, elCliente) {
        super(ID, "Venta", "NA", monto, fecha);

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
        let detalleVenta = new DetalleVenta(this, producto, cantidad);

        producto.lasVentas.push(detalleVenta);
        this.losProductos.push(detalleVenta);
    }
}