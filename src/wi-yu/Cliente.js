
class Cliente extends Persona {

    constructor() {
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