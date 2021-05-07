const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;

class MenuBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav className="nav">
                <div className="nav-head">
                    <span>Wi-Yu</span>
                    <button onClick={ }>3</button>
                </div>

                <div className="nav-body">
                    <ReactRouterDOM.HashRouter>
                        <Link to="/">Home</Link>
                        <Link to="/Dashboard">Dashboard</Link>
                        <Link to="/Inventary">Inventario</Link>
                        <Link to="/Bills">Facturas</Link>
                        <Link to="/Custumers">Clientes</Link>
                        <Link to="/Cash-Register">Caja</Link>

                    </ReactRouterDOM.HashRouter>
                </div>

                <div className="nav-footer">
                    Ayuda
                </div>
            </nav>
        );
    }
}

const Dashboard = () => <h1>Dashboard</h1>
const Inventary = () => <h1>Inventary</h1>
const Bills = () => <h1>Bills</h1>
const Custumers = () => <h1>Custumers</h1>
const CashRegister = () => <h1>Cash Register</h1>
