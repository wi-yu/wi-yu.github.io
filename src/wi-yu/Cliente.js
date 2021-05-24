
class Cliente extends Persona {

    /**
     * 
     * @param {String}  nombre 
     * @param {String}  apellido 
     * @param {TipoDoc} tipoDoc 
     * @param {Number}  numDocumento 
     * @param {Number}  telefonos 
     * @param {String}  correos 
     * @param {String}  direccions 
     */
    constructor(nombre, apellido, tipoDoc, numDocumento, telefonos, correos, direccions) {
        super(nombre, apellido, tipoDoc, numDocumento, telefonos, correos, direccions);

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