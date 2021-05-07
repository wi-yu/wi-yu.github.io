const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const Router = ReactRouterDOM.Router;

const App = () => {
    return (
        <div>
            <MenuBar />
            <ReactRouterDOM.HashRouter>
                <Route path="/" exact component={Sumary} />
                <Route path="/Dashboard" exact component={Dashboard} />
                <Route path="/Inventary" exact component={Inventary} />
                <Route path="/Bills" exact component={Bills} />
                <Route path="/Custumers" exact component={Custumers} />
                <Route path="/Cash-Register" exact component={CashRegister} />
            </ReactRouterDOM.HashRouter>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));