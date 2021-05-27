/**
 * @component
 * 
 */
class App extends React.Component {

    static defaultProps = {
        /** @type {Transacción[]} Lista de Transacciones (Transacción, venta, compra, Domicilio */
        lasTransacciones: [],
        /** @type {Persona[]} Lista de personas (Persona Cliente, trabajadores) */
        lasPersonas: [],
        /** @type {Producto[]} Lista de personas (Cliente, trabajadores) */
        losProductos: []
    }

    static propTypes = {
        /** @type {Transacción[]} Lista de Transacciones (Transacción, venta, compra, Domicilio */
        lasTransacciones: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.instanceOf(Transacción)),
            PropTypes.arrayOf(PropTypes.instanceOf(Venta)),
            PropTypes.arrayOf(PropTypes.instanceOf(Compra)),
            PropTypes.arrayOf(PropTypes.instanceOf(Domicilio))]).isRequired,
        /** @type {Persona[]} Lista de personas (Persona Cliente, trabajadores) */
        lasPersonas: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.instanceOf(Persona)),
            PropTypes.arrayOf(PropTypes.instanceOf(Cliente)),
            PropTypes.arrayOf(PropTypes.instanceOf(Trabajador))]).isRequired,
        /** @type {Producto[]} Lista de personas (Cliente, trabajadores) */
        losProductos: PropTypes.arrayOf(PropTypes.instanceOf(Producto)).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            /** @type {Transacción[]} Lista de Transacciones (Transacción, venta, compra, Domicilio */
            lasTransacciones: props.lasTransacciones,
            /** @type {Persona[]} Lista de personas (Persona Cliente, trabajadores) */
            lasPersonas: props.lasPersonas,
            /** @type {Producto[]} Lista de personas (Cliente, trabajadores) */
            losProductos: props.losProductos
        }
    }

    save() {
        localStorage.clear();

        let clientes = [];
        let trabajadores = [];
        let productos = [];
        let ventas = [];
        let transacciones = [];
        let domicilios = [];

        this.state.lasPersonas.map((persona) => {

            if (persona instanceof Cliente) {
                clientes.push(
                    {
                        nombre: persona.nombre,
                        apellido: persona.apellido,
                        tipoDoc: persona.tipoDoc,
                        numDocumento: persona.numDocumento,
                        telefono: persona.telefono,
                        correo: persona.correo,
                        direccions: persona.direccions,
                        comprar: persona.misCompras.length
                    }
                )
            } else {
                trabajadores.push(
                    {
                        nombre: persona.nombre,
                        apellido: persona.apellido,
                        tipoDoc: persona.tipoDoc,
                        numDocumento: persona.numDocumento,
                        telefono: persona.telefono,
                        correo: persona.correo,
                        direccions: persona.direccions,
                        salario: persona.salario,
                        fechaIngreso: persona.fechaIngreso
                    }
                )
            }
        });

        this.state.lasTransacciones.map((transacción) => {
            if (transacción instanceof Domicilio) {
                domicilios.push(
                    {
                        ID: transacción.ID,
                        monto: transacción.monto,
                        fecha: transacción.fecha,
                        elCliente: transacción.elCliente.numDocumento,
                        estadoVenta: transacción.estadoVenta,
                        direcion: transacción.direcion,
                        elRepartidor: transacción.elRepartidor.numDocumento
                    }
                )
            } else if (transacción instanceof Venta) {
                ventas.push(
                    {
                        ID: transacción.ID,
                        monto: transacción.monto,
                        fecha: transacción.fecha,
                        elCliente: transacción.elCliente.numDocumento
                    }
                )
            } else {
                transacciones.push(
                    {
                        ID: transacción.ID,
                        asunto: transacción.asunto,
                        descripcion: transacción.descripcion,
                        monto: transacción.monto,
                        fecha: transacción.fecha,
                    }
                )
            }
        });

        this.state.losProductos.map((producto) => {
            productos.push(
                {
                    ID: producto.ID,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    cantidad: producto.cantidad,
                }
            )
        })

        localStorage.setItem("Clientes", JSON.stringify(clientes));
        localStorage.setItem("Trabajadores", JSON.stringify(trabajadores));
        localStorage.setItem("Transacciones", JSON.stringify(transacciones));
        localStorage.setItem("Ventas", JSON.stringify(ventas));
        localStorage.setItem("Domicilios", JSON.stringify(domicilios));
        localStorage.setItem("Productos", JSON.stringify(productos));
    }

    /**
     * Remueve un elemento de la lista que esta ene el estado
     * 
     * @param {String} key      Clave de la lista
     * @param {Number} index    Posición del elemento
     */
    removeElement(key, index) {
        const lista = this.state[key];
        lista.splice(index, 1);
        this.setState({ key: lista });
    }

    /**
     * Sobre escribe un elemento del estado de la pagina
     * 
     * @param {String} key      Clave de la lista
     * @param {Number} value    Nuevo valor de la lista
     */
    actualizarEstado(key, value) {
        this.setState({ key: value });
    }

    render() {
        return (
            <div>
                <MenuBar>
                    <button onClick={this.save()}>Guardar</button>

                    <Modal title="Pedidos Pendientes" icon="fas fa-tasks" float>
                        <PedidosPendientes
                            actualizarEstado={(key, value) => this.actualizarEstado(key, value)}
                            lasTransacciones={this.state.lasTransacciones} />
                    </Modal>

                    <Modal title="Caja" icon="fas fa-cash-register" float>
                        <CajaRegistradora
                            actualizarEstado={(value) => this.actualizarEstado("lasTransacciones", value)}
                            lasTransacciones={this.state.lasTransacciones} />
                    </Modal>

                    <Modal title="Nuevo Pedido" icon="fas fa-cart-plus" float>
                        <NuevoPedido
                            actualizarEstado={(value) => this.actualizarEstado("lasTransacciones", value)}
                            lasTransacciones={this.state.lasTransacciones}
                            losProductos={this.state.losProductos}
                            lasPersonas={this.state.lasPersonas} />
                    </Modal>
                </MenuBar>

                <div className="page-content">
                    <main className="page-main">
                        <ReactRouterDOM.HashRouter>
                            <Route path="/" exact component={HomePage} />

                            <Route path="/Inventary" render={() => <InventaryPage
                                actualizarEstado={(key, value) => this.actualizarEstado(key, value)}
                                losProductos={this.state.losProductos}
                                removeElement={(index) => this.removeElement("losProductos", index)} />} />

                            <Route path="/Transacciones" render={() => <BillsPage
                                actualizarEstado={(value) => this.actualizarEstado("lasTransacciones", value)}
                                removeElement={(index) => this.removeElement("lasTransacciones", index)}
                                lasTransacciones={this.state.lasTransacciones} />} />

                            <Route path="/Clientes-y-Trabajadores" render={() => <PeoplePage
                                actualizarEstado={(value) => this.actualizarEstado("lasTransacciones", value)}
                                removeElement={(index) => this.removeElement("lasPersonas", index)}
                                lasPersonas={this.state.lasPersonas} />} />
                        </ReactRouterDOM.HashRouter>
                    </main>
                </div>

            </div>
        );
    }
}
