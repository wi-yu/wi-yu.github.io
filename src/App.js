/**
 * @component
 * 
 */
class App extends React.Component {

    static defaultProps = {
        losProductos: [],
        lasPersonas: [],
        lasTransacciones: []
    }

    constructor(props) {
        super(props);

        this.state = {
            /** @type {Transacción[]} */
            lasTransacciones: props.lasTransacciones,
            lasPersonas: props.lasPersonas,
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

    render() {
        return (
            <div>
                <MenuBar>
                    {/* if (Transacción instanceof Domicilio && Transacción.estadoVenta == EstadoVenta.pendiente) */}
                    <Modal title="Pedidos Pendientes" icon="fas fa-tasks" float>
                        {this.state.lasTransacciones.map((Transacción, index) => {
                            return (Transacción instanceof Domicilio && Transacción.estadoVenta == EstadoVenta.pendiente) && <Pedido key={index} pedido={Transacción}
                                autoDestruccion={() => this.removeElement("lasTransacciones", index)} />
                        })}
                    </Modal>

                    <Modal title="Caja" icon="fas fa-cash-register" float>
                    </Modal>

                    <Modal title="Nuevo Pedido" icon="fas fa-cart-plus" float>
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
