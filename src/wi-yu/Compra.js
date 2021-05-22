class Compra extends Transaccion {
    /**
     * 
     * @param {Number} IDPedido 
     */
    constructor(IDPedido) {
        this.IDPedido = IDPedido;

        /** @type {Proveedor[]} */
        this.losProveedores = [];

    }
}