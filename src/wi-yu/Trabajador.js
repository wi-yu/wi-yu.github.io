
class Trabajador extends Persona {

    /**
     * 
     * @param {Number} salario 
     * @param {Date} fechaIngreso 
     */
    constructor(nombre, apellido, tipoDoc, numDocumento, telefono, correo, direccions, salario, fechaIngreso) {
        super(nombre, apellido, tipoDoc, numDocumento, telefono, correo, direccions);
        this.salario = salario;
        this.fechaIngreso = fechaIngreso != null || fechaIngreso != undefined ? fechaIngreso : new Date();

        this.misEntregas = [];
    }

    nuevaEntrega(entrega) {
        this.misEntregas.push(entrega);
    }
}