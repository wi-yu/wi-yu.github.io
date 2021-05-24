class Compra extends Transacion {
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