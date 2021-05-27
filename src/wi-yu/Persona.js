/**
 * @enum {TipoDoc}
 */
const TipoDoc = {
    TI: "Tarjeta Identidad",
    CC: "Cedula",
    CE: "Cedula Extranjería"
}


/**
 * @enum {TipoDoc}
 */
const TipoPersona = {
    cliente: "Cliente",
    trabajador: "Trabajador"
}

class Persona {

    /**
     * 
     * @param {String}      nombre          Nombres de la persona.
     * @param {String}      apellido        Apellidos de la persona.
     * @param {TipoDoc}     tipoDoc         Tipo de documento de la persona.
     * @param {Number}      numDocumento    Numero de documento de la persona.
     * @param {Number}      telefono       Telefono de la persona.
     * @param {String}      correos         Correos electronico de la persona.
     * @param {String}      direccioes      Dereccioes de la persona.
     */
    constructor(nombre, apellido, tipoDoc, numDocumento, telefono, correos, direcciones) {
        this.nombre = nombre
        this.apellido = apellido;
        this.tipoDoc = tipoDoc;
        this.numDocumento = numDocumento;
        this.telefono = telefono;
        this.correos = correos;
        this.direcciones = direcciones;
    }

}