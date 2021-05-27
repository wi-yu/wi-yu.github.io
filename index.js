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

const los_clientes_json = JSON.parse(localStorage.getItem("Clientes"));
const los_trabajadores_json = JSON.parse(localStorage.getItem("Trabajadores"));
const las_transacciones_json = JSON.parse(localStorage.getItem("Transacciones"));
const las_ventas_json = JSON.parse(localStorage.getItem("Ventas"));
const los_domicilios_json = JSON.parse(localStorage.getItem("Productos"));


const buscarPersona = (documento) => {
    let laPersona = null;

    lasPersonas.map((persona) => {
        if (persona.numDocumento == documento) {
            laPersona = persona;
        }
    });
    return laPersona;
}

if (los_clientes_json != null) {
    for (let key of Object.keys(los_clientes_json)) {
        let cliente_json = los_clientes_json[key];

        let cliente = new Cliente(cliente_json.nombre,
            cliente_json.apellido,
            cliente_json.tipoDoc,
            cliente_json.numDocumento,
            cliente_json.telefono,
            cliente_json.telefono,
            cliente_json.correo,
            cliente_json.direccions);
        lasPersonas.push(cliente);
    }
}

if (los_trabajadores_json != null) {
    for (let key of Object.keys(los_trabajadores_json)) {
        let trabajador_json = los_trabajadores_json[key];

        let trabajador = new Trabajador(trabajador_json.nombre,
            trabajador_json.apellido,
            trabajador_json.tipoDoc,
            trabajador_json.numDocumento,
            trabajador_json.telefono,
            trabajador_json.telefono,
            trabajador_json.correo,
            trabajador_json.direccions,
            trabajador_json.salario);
        lasPersonas.push(trabajador);
    }
}

if (las_transacciones_json != null) {
    for (let key of Object.keys(las_transacciones_json)) {
        let transacción_json = las_transacciones_json[key];

        let transacción = new Transacción(transacción_json.ID,
            transacción_json.asunto,
            transacción_json.descripcion,
            transacción_json.monto,
            new Date(transacción_json.fecha));
        lasTransacciones.push(transacción);
    }
}

if (las_ventas_json != null) {
    for (let key of Object.keys(las_ventas_json)) {
        let venta_json = las_ventas_json[key];

        let cliente = buscarPersona(venta_json.elCliente);

        let venta = new Venta(venta_json.ID,
            venta_json.monto,
            new Date(venta_json.fecha),
            cliente);

        cliente.nuevaCompra(venta);
        lasTransacciones.push(venta);
    }
}

if (los_domicilios_json != null) {
    for (let key of Object.keys(los_domicilios_json)) {
        let domicilio_json = los_domicilios_json[key];

        let cliente = buscarPersona(venta_json.elCliente);

        let domicilio = new Domicilio(domicilio_json.ID,
            domicilio_json.monto,
            new Date(domicilio_json.fecha),
            cliente,
            domicilio_json.estadoVenta,
            domicilio_jso.direcion,
            buscarPersona(domicilio_json.elRepartidor))

        cliente.nuevaCompra(domicilio);
        lasTransacciones.push(domicilio);
    }
}

ReactDOM.render(<App lasPersonas={lasPersonas} losProductos={losProductos} lasTransacciones={lasTransacciones} />, document.querySelector('#root'));
