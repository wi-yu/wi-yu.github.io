class MenuBar extends React.Component {
    static defaultProps = {
        losPedidos: []
    }

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    openClose() {
        this.setState(prevState => (
            { show: !prevState.show }))
    }

    getPedidos() {
        let array = [];
        for (let i = 0; i < this.props.losPedidos.length; i++) {
            array.push(
                <Pedido key={i} pedido={this.props.losPedidos[i]} />
            );
        }

        return array;
    }
    render() {
        let listaPedidos = this.getPedidos();

        return (
            <nav className="nav">
                <div className="nav-head">
                    <a className={"nav-button" + " " + (this.state.show ? "active" : null)} onClick={() => this.openClose()}><span>&#9776;</span></a>
                    <span>Wi-Yu</span>

                    <Modal title="Pedidos Pendientes" icon="fas fa-tasks" float>
                        {listaPedidos}
                    </Modal>

                    <Modal title="Caja" icon="fas fa-cash-register" float>

                    </Modal>
                    <Modal title="Nuevo Pedido" icon="fas fa-cart-plus" float>
                        <NuevoPedidio />
                    </Modal>

                </div>

                {this.state.show && <div className="nav-body">
                    <ReactRouterDOM.HashRouter>
                        <Link to="/">Home</Link>
                        <Link to="/Dashboard">Dashboard</Link>
                        <Link to="/Inventary">Inventario</Link>
                        <Link to="/Bills">Facturas</Link>
                        <Link to="/Custumers">Clientes</Link>
                        <Link to="/Help">Ayuda</Link>
                    </ReactRouterDOM.HashRouter>
                </div>}
            </nav >
        );
    }
}