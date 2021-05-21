class Domicilio extends Venta{
    constructor(estadoVenta,direcion,elRepartidor,losClientes){
        this.estadoVenta=estadoVenta={
        completado="Completado",
        cancelado="Cancelado",
        pendiente="Pendiente"
        }
        this.direcion=direcion
        Trabajador.elRepartidor=elRepartidor
        Cliente.losClientes= new Array(losClientes)
    }
}