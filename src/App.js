const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const Router = ReactRouterDOM.Router;

const App = () => {
    return (
        <div>
            <MenuBar />
            <div className="page-content">
                <ToolBar />
                <main className="page-main">
                    <ReactRouterDOM.HashRouter>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/Dashboard" exact component={DashboardPage} />
                        <Route path="/Inventary" exact component={InventaryPage} />
                        <Route path="/Bills" exact component={BillsPage} />
                        <Route path="/Custumers" exact component={CustumersPage} />
                        <Route path="/Cash-Register" exact component={CashRegisterPage} />
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

ReactDOM.render(<App />, document.querySelector('#root'));