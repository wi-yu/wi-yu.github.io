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

    /**
     * Remueve un elemento de la lista que esta ene el estado
     * 
     * @param {String} key Clave de la lista
     * @param {number} index Posición del elemento
     */
    removeElement(key, index) {
        const lista = this.state[key];
        lista.splice(index, 1);
        this.setState({ key: lista });
    }

    actualizarEstado(key, value) {
        this.setState({ key: value });
    }

    render() {
        return (
            <div>
                <MenuBar>

                    <Modal title="Pedidos Pendientes" icon="fas fa-tasks" float>
                        <PedidosPendientes actualizarEstado={(value) => this.actualizarEstado("lasTransacciones", value)} lasTransacciones={this.state.lasTransacciones}></PedidosPendientes>
                    </Modal>

                    <Modal title="Caja" icon="fas fa-cash-register" float>
                        <CajaRegistradora actualizarEstado={(value) => this.actualizarEstado("lasTransacciones", value)} lasTransacciones={this.state.lasTransacciones} />
                    </Modal>

                    <Modal title="Nuevo Pedido" icon="fas fa-cart-plus" float>
                        <NuevoPedido actualizarEstado={(value) => this.actualizarEstado("lasTransacciones", value)} lasTransacciones={this.state.lasTransacciones} lasPersonas={this.state.lasPersonas}></NuevoPedido>
                    </Modal>

                </MenuBar>

                <div className="page-content">
                    <main className="page-main">
                        <ReactRouterDOM.HashRouter>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/Inventary" exact render={() => <InventaryPage losProductos={this.state.losProductos} />} />
                            <Route className="page-main" path="/Transacciones" render={() => <BillsPage removeElement={(index) => this.removeElement("lasTransacciones", index)} lasTransacciones={this.state.lasTransacciones} />} />
                            <Route path="/Clientes-y-Trabajadores" render={() => <CustumersPage removeElement={(index) => this.removeElement("lasPersonas", index)} lasPersonas={this.state.lasPersonas} />} />
                            <Route path="/Help" exact component={HelpPage} />
                        </ReactRouterDOM.HashRouter>
                    </main>
                </div>

            </div>
        );
    }
}
