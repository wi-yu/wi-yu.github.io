
class Cliente extends Persona {

    /**
     * 
     * @param {String}  nombre 
     * @param {String}  apellido 
     * @param {TipoDoc} tipoDoc 
     * @param {Number}  numDocumento 
     * @param {Number}  telefono 
     * @param {String}  correo 
     * @param {String}  direccions 
     */
    constructor(nombre, apellido, tipoDoc, numDocumento, telefono, correo, direccions) {
        super(nombre, apellido, tipoDoc, numDocumento, telefono, correo, direccions);

        /** @type {Venta[]} */
        this.misCompras = [];
    }

    /**
     * 
     * @param {Venta} compra 
     */
    nuevaCompra(compra) {
        this.misCompras.push(compra);
    }
}