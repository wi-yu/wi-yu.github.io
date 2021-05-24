
/**
 * @enum {String}
 */
const EstadoVenta = {
    completado: "Completado",
    cancelado: "Cancelado",
    pendiente: "Pendiente"
}

class Domicilio extends Venta {

    /**
     * @param {String}      ID              ID de la venta (Hexadecimal) 
     * @param {Number}      monto           Total de la venta (Por defecto puede ser 0)
     * @param {Date}        fecha           Fecha en la que se realiza la venta
     * @param {Cliente}     elCliente       El cliente que realiza la venta
     * @param {EstadoVenta} estadoVenta     El estado del domicilio
     * @param {Number}      direcion        La dirección de entrega
     * @param {Trabajador}  elRepartidor    La persona que hara la entrega
     */
    constructor(ID, monto, fecha, elCliente, estadoVenta, direcion, elRepartidor) {
        super(ID, monto, fecha, elCliente);

        this.estadoVenta = estadoVenta;
        this.direcion = direcion;
        this.elRepartidor = elRepartidor;

        /** @type {Date} */
        this.fechaEntraga = null;
    }

    entregar(fechaEntrega) {
        this.fechaEntraga = fechaEntrega;
        this.estadoVenta = EstadoVenta.completado;
    }

    cancelar() {
        this.estadoVenta = EstadoVenta.cancelado;
    }
}