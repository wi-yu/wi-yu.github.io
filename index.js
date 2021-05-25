const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const Router = ReactRouterDOM.Router;
const useState = React.useState;

const producto = new Producto("nombre", 333, 33, null);
const cliente = new Cliente("Pedrito", "Luis", TipoDoc.CC, "111111", 33333, "pp@gmail.com", "calle");
const pedido = new Domicilio(1222, null, cliente, null, null, null);


const lasPersonas = [];
const losProductos = [];
const losPedidos = [];
const lasTransacciones = [];

// Crear personas 
for (let index = 0; index <= 10; index++) {
    let persona = new Persona("Nombre" + index, "Apellido" + index, TipoDoc.CE, 100182218 + index, [3046571279, 3002888784], ["juanitoDeTal@gamil.com", "juanitoDeTal@gamil.com", "juanitoDeTal@gamil.com"], null);
    let cliente = new Cliente("Ncliente" + index, "Acliente" + index, TipoDoc.CE, 100182218 + index + "c", [3046571279, 3002888784], ["clienteDeTal@gamil.com", "clienteDeTal@gamil.com", "clienteDeTal@gamil.com"], null)
    let trabajador = new Trabajador("Ntrabajador" + index, "Atrabajador" + index, TipoDoc.CE, 100182218 + index + "t", [3046571279, 3002888784], ["clienteDeTal@gamil.com", "clienteDeTal@gamil.com", "clienteDeTal@gamil.com"], null)

    lasPersonas.push(persona)
    lasPersonas.push(cliente)
    lasPersonas.push(trabajador)

}
// Craer productos 
for (let index = 0; index <= 10; index++) {
    let producto = new Producto("Producto" + index, 100 * index, index, null)
    losProductos.push(producto)
}

// Crear Domicilios
for (let index = 0; index <= 10; index++) {
    let domicilio = new Domicilio(index, index * 100, null, cliente, EstadoVenta.pendiente, "", null);

    domicilio.añadirProducto(losProductos[index], index)
    lasTransacciones.push(domicilio);
}


ReactDOM.render(<App lasPersonas={lasPersonas} losProductos={losProductos} lasTransacciones={lasTransacciones} />, document.querySelector('#root'));
