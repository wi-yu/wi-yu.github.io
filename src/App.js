/**
 * @component
 * 
 */
class App extends React.Component {

    static defaultProps = {
        losProductos: [],
        lasPersonas: [],
        lasTransaciones: []
    }

    constructor(props) {
        super(props);

        this.losProductos = props.losProductos;
        this.lasPersonas = props.lasPersonas;
        this.lasTransaciones = props.lasTransaciones;

        this.state = {
            /** @type {Domicilio[]} */
            pedidosPendientes: this.getPedidosPendientes()
        }
    }

    /**
     * Dada una lista transacciones, busca los domiciolios que no se han entregado
     * 
     * @returns {Domicilio[]}
     */
    getPedidosPendientes() {
        let array = [];

        for (let index = 0; index < this.lasTransaciones.length; index++) {
            let transacion = this.lasTransaciones[index];

            if (transacion instanceof Domicilio && transacion.estadoVenta == EstadoVenta.pendiente) {
                array.push(transacion);
            }
        }

        return array;
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
                    <Modal title="Pedidos Pendientes" icon="fas fa-tasks" float>
                        {this.state.pedidosPendientes.map((pedido, index) => {
                            return <Pedido
                                key={index}
                                pedido={pedido}
                                autoDestruccion={() => this.removeElement("pedidosPendientes", index)} />
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
                            <Route path="/Dashboard" exact component={DashboardPage} />
                            <Route path="/Inventary" exact component={InventaryPage} />
                            <Route path="/Bills" exact component={BillsPage} />
                            <Route path="/Custumers" exact component={CustumersPage} />
                            <Route path="/Help" exact component={HelpPage} />
                        </ReactRouterDOM.HashRouter>
                    </main>

                </div>
            </div>
        );
    }

}
