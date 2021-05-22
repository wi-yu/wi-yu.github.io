
/**
 * @enum {EstadoVenta}
 */
const EstadoVenta = {
    completado = "Completado",
    cancelado = "Cancelado",
    pendiente = "Pendiente"
}

class Domicilio extends Venta {

    /**
     * 
     * @param {EstadoVenta} estadoVenta 
     * @param {String} direcion 
     * @param {Trabajador} elRepartidor 
     * @param {Cliente} elCliente 
     */
    constructor(estadoVenta, direcion, elRepartidor, elCliente) {
        this.estadoVenta = estadoVenta;
        this.direcion = direcion;
        this.elRepartidor = elRepartidor;
        this.elCliente = elCliente;
    }
}