class Persona {
    constructor(nombre, apellido, tipoDoc, numDocumento, telefono,correo, direccion) {
        this.nombre = nombre
        this.apellido = apellido
        this.tipoDoc = tipoDoc = {
            TI= "Tarjeta Identidad",
            CC="Cedula",
            CE="Cedula Extranjería"
        }
        this.numDocumento = numDocumento
        this.telefono = telefono
        this.correo = correo
        this.direccion = direccion
    }
}