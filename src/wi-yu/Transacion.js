
/**
 * @enum {TipoPago}
 */
const TipoPago = {
    Efectivo: "Efectivo",
    TC: "Tarjeta credito",
    TD: "Tarjeta debito",
}

class Transacion {

    /**
     * 
     * @param {String}      asunto          Porque se hizo esta transacción
     * @param {String}      descripcion     Descripción mas detalla de la trasacción
     * @param {Number}      monto           Dinero ingresado o retirado
     * @param {Date}        fecha           Fecha en la que se hizo 
     */
    constructor(asunto, descripcion, monto, fecha) {
        this.asunto = asunto;
        this.descripcion = descripcion;
        this.monto = monto;
        this.fecha = fecha;
    }
}