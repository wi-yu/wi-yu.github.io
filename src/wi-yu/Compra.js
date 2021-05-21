class Compra extends Transaciones{
    constructor(IDPedido,losProveedores){
        this.IDPedido=IDPedido
        Proveedores.losProveedores=new Array(losProveedores)
    }
}