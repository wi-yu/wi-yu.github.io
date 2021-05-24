const App = (props) => {
    let losPedidos = props.losPedidos;

    return (
        <div>
            <MenuBar losPedidos={losPedidos} />

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