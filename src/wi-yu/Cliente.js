class Cliente extends Persona{
    constructor(elDomicilio,misVentas){
        Domicilio.elDomicilio=elDomicilio
        Venta.misVentas=new Array (misVentas)
    }
}