class Trabajador extends Persona{
constructor(salario,fechaIngreso,misEntregas){
    this.salario=salario
    this.fechaIngreso=fechaIngreso
    Domicilio.misEntregas=new Array(misEntregas)
}
}