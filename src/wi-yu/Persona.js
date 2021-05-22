/**
 * @enum {TipoDoc}
 */
const TipoDoc = {
    TI =  "Tarjeta Identidad",
    CC = "Cedula",
    CE = "Cedula Extranjería"
}

class Persona {
    /**
     * 
     * @param {String}  nombre 
     * @param {String}  apellido 
     * @param {TipoDoc} tipoDoc 
     * @param {int}     numDocumento 
     * @param {int}     telefono 
     * @param {String}  correo 
     * @param {String}  direccion 
     */
    constructor(nombre, apellido, tipoDoc, numDocumento, telefono, correo, direccion) {
        this.nombre = nombre
        this.apellido = apellido;
        this.tipoDoc = tipoDoc;
        this.numDocumento = numDocumento;
        this.telefono = telefono;
        this.correo = correo;
        this.direccion = direccion;
    }

    setCorreo(correo) {
        this.correo = correo;
    }

    setDireccion(direccion) {
        this.direccion = direccion;
    }

    setTelefono(telefono) {
        this.telefono = telefono;
    }
}