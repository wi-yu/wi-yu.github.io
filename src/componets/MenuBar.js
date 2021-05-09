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
                </div>

                {this.state.show && <div className="nav-body">
                    <ReactRouterDOM.HashRouter>
                        <Link to="/">Home</Link>
                        <Link to="/Dashboard">Dashboard</Link>
                        <Link to="/Inventary">Inventario</Link>
                        <Link to="/Bills">Facturas</Link>
                        <Link to="/Custumers">Clientes</Link>
                        <Link to="/Cash-Register">Caja</Link>

                    </ReactRouterDOM.HashRouter>
                </div>}

                {this.state.show && <div className="nav-footer">
                    <a href="">Ayuda</a>
                </div>}
            </nav >
        );
    }
}