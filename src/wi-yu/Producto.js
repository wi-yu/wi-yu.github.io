class Producto{
    constructor(nombre,precio,IDProducto,laventa,elInventario,losProveedores,laventa){
        this.nombre=nombre
        this.precio=precio
        this.IDProducto=IDProducto
        Venta.laventa=laventa
        Inventario.elInventario=elInventario
        Proveedores.losProveedores=new Array(losProveedores)
    }
}