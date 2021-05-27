class NuevoProducto extends React.Component {
    static defaultProps = {
        /** @type {Producto[]} */
        losProductos: [],
        /** Actualiza la los datos en la pagina principal */
        actualizarEstado: () => console.log("Defina 'actualizarEstado'")
    }

    constructor(props) {
        super(props);

        /**
         * Da un ID. Si no hay elementos en la lista, regresa 1. Sino, regresa el tamaño de la lista mas 1
         * 
         * @param {Array} lista     Lista 
         * @returns 
         */
        this.ID = (lista) => {
            if (lista.length > 0) return lista[lista.length - 1].ID + 1
            else return lista.length + 1
        }

        this.state = {
            losProductos: props.losProductos,
            ID: this.ID(props.losProductos),
            nombre: '',
            precio: 0,
            proveedor: 0,
            resultado: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();

        let formIsValid = true;
        let resultado = [];

        if (this.state.nombre.length <= 0) {
            resultado.push("Ingrese el nombre del producto");
            formIsValid = false;
        }

        if (this.state.precio <= 0) {
            resultado.push("Ingrese el precio del productos");
            formIsValid = false;
        }

        if (formIsValid) {
            let producto = new Producto(
                this.state.ID,
                this.state.nombre,
                this.state.precio,
                this.state.proveedor)

            this.props.losProductos.push(producto);
            this.props.actualizarEstado(this.state.losProductos);
            this.setState({
                losProductos: this.props.losProductos,
                ID: this.ID(this.props.losProductos),
                nombre: '',
                precio: 0,
                proveedor: 0,
                resultado: []
            })
        }

        this.setState({ resultado: resultado });
    }

    render() {
        return (<form className="modal-form">

            <label>Nombre
                <input name="nombre" type="text"
                    value={this.state.nombre} onChange={this.handleChange} />
            </label>

            <label>Precio
                <input name="precio" type="number"
                    value={this.state.precio} onChange={this.handleChange} />
            </label>

            <button type="submit" onClick={(event) => this.handleSubmit(event)}>Enviar</button>


            <div>Resultado: {this.state.resultado.map((resultado, index) => {
                return <p key={"resultado" + index}>{resultado}</p>
            })}</div>
        </form>
        );
    }
}