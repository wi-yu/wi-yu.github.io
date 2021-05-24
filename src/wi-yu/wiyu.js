class Wiyu {

    constructor() {
        this.lasPersonas = [];
        this.losProductos = [];
        this.lasTransaciones = [];

        ReactDOM.render(<App lasPersonas={this.lasPersonas} losProductos={this.losProductos} lasTransaciones={this.lasTransaciones} />, document.querySelector('#root'));
    }

}