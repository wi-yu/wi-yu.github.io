
/**
 * @enum {TipoPago}
 */
const TipoPago = {
    Efectivo = "Efectivo",
    TC = "Tarjeta credito",
    TD = "Tarjeta debito",
}

/**
 * @enum {EstadoTrans}
 */
const EstadoTrans = {
    Efectivo,
    TC = "Tarjeta credito",
    TD = "Tarjeta debito",
}

class Transacion {

    /**
     * 
     * @param {String} asunto 
     * @param {String} descripcion 
     * @param {Number} monto 
     * @param {Date} fecha 
     * @param {EstadoTrans} estado 
     * @param {TipoPago} tipoPago 
     */
    constructor(asunto, descripcion, monto, fecha, estado, tipoPago) {
        this.asunto = asunto;
        this.descripcion = descripcion;
        this.monto = monto;
        this.fecha = fecha;
        this.estado = estado;
        this.tipoPago = tipoPago;
    }
}