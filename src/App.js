const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const Router = ReactRouterDOM.Router;
const useState = React.useState;


const App = () => {

    return (
        <div>
            <MenuBar />

            <div className="page-content">
                <main className="page-main">
                    <ReactRouterDOM.HashRouter>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/Dashboard" exact component={DashboardPage} />
                        <Route path="/Inventary" exact component={InventaryPage} />
                        <Route path="/Bills" exact component={BillsPage} />
                        <Route path="/Custumers" exact component={CustumersPage} />
                        <Route path="/Cash-Register" exact component={CashRegisterPage} />
                        <Route path="/Help" exact component={HelpPage} />
                    </ReactRouterDOM.HashRouter>
                </main>
            </div>
        </div>
    );
}

const HomePage = () => <h1>Home</h1>
const DashboardPage = () => <h1>Dashboard</h1>
const InventaryPage = () => <h1>Inventary</h1>
const BillsPage = () => <h1>Bills</h1>
const CustumersPage = () => <h1>Custumers</h1>
const CashRegisterPage = () => <h1>Cash Register</h1>
const HelpPage = () => <h1>Ayuda</h1>


ReactDOM.render(<App />, document.querySelector('#root'));