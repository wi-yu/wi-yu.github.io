/**
 * @enum {TipoDoc}
 */
const TipoDoc = {
    TI: "Tarjeta Identidad",
    CC: "Cedula",
    CE: "Cedula Extranjería"
}

class Persona {

    /**
     * 
     * @param {String}      nombre          Nombres de la persona.
     * @param {String}      apellido        Apellidos de la persona.
     * @param {TipoDoc}     tipoDoc         Tipo de documento de la persona.
     * @param {Number}      numDocumento    Numero de documento de la persona.
     * @param {Number[]}    telefonos       Telefonos de la persona.
     * @param {String[]}    correos         Correos electronico de la persona.
     * @param {String[]}    direccioes      Dereccioes de la persona.
     */
    constructor(nombre, apellido, tipoDoc, numDocumento, telefonos, correos, direcciones) {
        this.nombre = nombre
        this.apellido = apellido;
        this.tipoDoc = tipoDoc;
        this.numDocumento = numDocumento;
        this.telefonos = telefonos;
        this.correos = correos;
        this.direcciones = direcciones;
    }

    /**
     * Añade un correo a la lista de correos.
     * 
     * @param {String} correos 
     */
    añadirCorrero(correos) {
        this.correos.push(correos);
    }

    /**
     * Aañade un telefono a la lista de correos.
     * 
     * @param {Number} telefono 
     */
    añadirTelefono(telefono) {
        this.telefonos.push(telefono);
    }

    /**
     * Añade una dirección a la lista de direcciones.
     * 
     * @param {String} direccion 
     */
    añadirDireccion(direccion) {
        this.direcciones.push(direccion);
    }
}