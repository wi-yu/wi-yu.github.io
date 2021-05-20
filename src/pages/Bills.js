class Odrer {

    constructor(fechaPedido, tipoP, descuento, direccion, comentarios) {
        this.fechaPedido = fechaPedido
        this.tipoP = tipoP = {
            Efectivo,
            TC = "Tarjeta credito",
            TD = "Tarjeta debito",
        }
        this.descuento = descuento
        this.direccion = direccion
        this.comentarios = comentarios
    }

    imprimirFactura(fechaPedido,tipoP,descuento,direccion,comentarios){
        if(descuento>0){
            descuentoAp= "Si"
            console.log("Fecha de Pedido: ",fechaPedido,
                         "\n","Tipo de pago: ",tipoP,
                         "\n","Descuento aplicado: ",descuentoAp,
                         "\n","Descuento total",descuento,
                         "\n","Direccion de entrega: ",direccion,
                         "\n","Comentarios: ",comentarios)
        } else{
            descuentoAp= "No"
            console.log("Fecha de Pedido: ",fechaPedido,
                        "\n","Tipo de pago: ",tipoP,
                        "\n","Descuento aplicado: ",descuentoAp,
                        "\n","Direccion de entrega: ",direccion,
                        "\n","Comentarios: ",comentarios)
        }
        
    }
}

class Sales{
    constructor(fechaEntrega){
        this.fechaEntrega=fechaEntrega
    }
}