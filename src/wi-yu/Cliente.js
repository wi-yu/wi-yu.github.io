
class Cliente extends Persona {

    /**
     * 
     * @param {String}  nombre 
     * @param {String}  apellido 
     * @param {TipoDoc} tipoDoc 
     * @param {Number}  numDocumento 
     * @param {Number}  telefono 
     * @param {String}  correos 
     * @param {String}  direccions 
     */
    constructor(nombre, apellido, tipoDoc, numDocumento, telefono, correos, direccions) {
        super(nombre, apellido, tipoDoc, numDocumento, telefono, correos, direccions);

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