class MenuBar extends React.Component {
    static defaultProps = {
        numOrders: 0
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

    render() {
        return (
            <nav className="nav">
                <div className="nav-head">
                    <a className={"nav-button" + " " + (this.state.show ? "active" : null)} onClick={() => this.openClose()}><span>&#9776;</span></a>
                    <span>Wi-Yu</span>
                    <Modal title="Pedidos Pendientes" icon="fas fa-tasks" float></Modal>
                    <Modal title="Caja" icon="fas fa-cash-register" float></Modal>
                    <Modal title="Nuevo Pedido" icon="fas fa-cart-plus" float></Modal>
                </div>

                {this.state.show && <div className="nav-body">
                    <ReactRouterDOM.HashRouter>
                        <Link to="/">Home</Link>
                        <Link to="/Dashboard">Dashboard</Link>
                        <Link to="/Inventary">Inventario</Link>
                        <Link to="/Bills">Facturas</Link>
                        <Link to="/Custumers">Clientes</Link>
                        <Link to="/Cash-Register">Caja</Link>
                        <Link to="/Help">Ayuda</Link>
                    </ReactRouterDOM.HashRouter>
                </div>}
            </nav >
        );
    }
}