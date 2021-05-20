class Person {

    constructor(nombre, apellidos, tipoDoc, numDocumento, telefono, direccion) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.tipoDoc = tipoDoc = {
            TI= "Tarjeta Identidad",
            CC="Cedula",
            CE="Cedula Extranjería"
        }
        this.numDocumento = numDocumento
        this.telefono = telefono
        this.direccion = direccion
    }

    actualizarPersona(nombrePer) {
        Personas.forEach(Person => {
            if (nombrePer == Client.nombre) {
                var opcion = prompt("Seleccionar dato a cambiar", "")
                switch (opcion) {
                    case telefono:
                        Client.telefono = prompt("Escribir nuevo numero de telefono", "");
                        break;

                    case direccion:
                        Client.direccion = prompt("Escribir nueva direccion", "");
                        break;
                }
                break;
            } else {
                console.log("No se encontró el nombre indicado")
                break;
            }
        });

    }

}

class Client extends Person {
    constructor(nombre, apellidos, tipoDoc, documento, telefono, direccion) {
        super(nombre, apellidos, tipoDoc, documento, telefono, direccion)
    }

}

class Employee extends Person {

    constructor(nombre, apellidos, tipoDoc, documento, telefono, direccion, salario, fechaIngreso) {
        super(nombre, apellidos, tipoDoc, documento, telefono, direccion)
        this.salario = salario
        this.fechaIngreso = fechaIngreso
    }
    actualizarSalario(nombreT) {
        Empleados.forEach(Employee => {
            if (nombreT == Employee.nombre) {
                Employee.salario = prompt("Escriba nuevo salario", "")
                break;
            } else {
                console.log("No se encontró el nombre indicado")
                break;
            }
        });

    }

}
