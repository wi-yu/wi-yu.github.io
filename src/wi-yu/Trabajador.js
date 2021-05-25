
class Trabajador extends Persona {

    /**
     * 
     * @param {Number} salario 
     * @param {Date} fechaIngreso 
     */
    constructor(nombre, apellido, tipoDoc, numDocumento, telefonos, correos, direccions, salario, fechaIngreso) {
        super(nombre, apellido, tipoDoc, numDocumento, telefonos, correos, direccions);
        this.salario = salario;
        this.fechaIngreso = fechaIngreso;

        this.misEntregas = [];
    }

    nuevaEntrega(entrega) {
        this.misEntregas.push(entrega);
    }
}