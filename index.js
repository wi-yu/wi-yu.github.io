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
const lasTransaciones = [];

// Craer productos 
for (let index = 0; index <= 10; index++) {
    let producto = new Producto("Producto" + index, 100 * index, index, null)
    losProductos.push(producto)
}

// Crear Domicilios
for (let index = 0; index <= 10; index++) {
    let domicilio = new Domicilio(index, index * 100, null, cliente, EstadoVenta.pendiente, "", null);

    domicilio.añadirProducto(losProductos[index], index)
    lasTransaciones.push(domicilio);
}


ReactDOM.render(<App lasPersonas={lasPersonas} losProductos={losProductos} lasTransaciones={lasTransaciones} />, document.querySelector('#root'));
