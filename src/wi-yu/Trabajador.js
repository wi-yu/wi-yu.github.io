
class Trabajador extends Persona {

    /**
     * 
     * @param {Number} salario 
     * @param {Date} fechaIngreso 
     */
    constructor(salario, fechaIngreso) {
        this.salario = salario;
        this.fechaIngreso = fechaIngreso;

        this.misEntregas = [];
    }

    nuevaEntrega(entrega) {
        this.misEntregas.push(entrega);
    }
}