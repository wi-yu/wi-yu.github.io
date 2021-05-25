class Compra extends Transacción {
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