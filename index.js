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


ReactDOM.render(<App lasPersonas={lasPersonas} losProductos={losProductos} lasTransacciones={lasTransacciones} />, document.querySelector('#root'));
