class Transaciones{
constructor(asunto,descripcion,monto,fecha,estado,tipoPago){
    this.asunto=asunto
    this.descripcion=descripcion
    this.monto=monto
    this.fecha=fecha
    this.estado=estado={
        ING="Ingreso",
        EGR="Egreso"
    }
    this.tipoPago = tipoPago = {
        Efectivo,
        TC = "Tarjeta credito",
        TD = "Tarjeta debito",
    }
    
}


}