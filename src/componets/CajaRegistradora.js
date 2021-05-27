class CajaRegistradora extends React.Component {

    static defaultProps = {
        /** @type {Transacción[]} */
        lasTransacciones: [],
        /** Actualiza la los datos en la pagina principal */
        actualizarEstado: () => console.log("Defina 'actualizarEstado'")
    }
    static propTypes = {
        lasTransacciones: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.instanceOf(Transacción)),
            PropTypes.arrayOf(PropTypes.instanceOf(Venta)),
            PropTypes.arrayOf(PropTypes.instanceOf(Compra)),
            PropTypes.arrayOf(PropTypes.instanceOf(Domicilio))]).isRequired,
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
            lasTransacciones: props.lasTransacciones,
            ID: this.ID(props.lasTransacciones),
            asunto: '',
            descripcion: '',
            monto: 0,
            fecha: (new Date()).toISOString().substr(0, 10),
            resultado: ['']
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

        if (this.state.monto == 0) {
            resultado.push("Ingrese un monto diferente de 0.");
            formIsValid = false;
        }

        if (this.state.asunto.length <= 0) {
            resultado.push("Ingrese un asunto")
        }

        if (this.state.fecha != null && new Date(this.state.fecha) == "Invalid Date") {
            resultado.push("Ingrese una fecha valida.");
            formIsValid = false;
        }

        if (formIsValid) {
            let transaccion = new Transacción(this.state.ID, this.state.asunto, this.state.descripcion, parseFloat(this.state.monto), new Date(this.state.fecha));

            this.state.lasTransacciones.push(transaccion);
            this.props.actualizarEstado(this.state.lasTransacciones);

            // Regresar al estado original
            this.setState(
                {
                    ID: this.ID(this.props.lasTransacciones),
                    asunto: '',
                    descripcion: '',
                    monto: 0,
                    fecha: (new Date()).toISOString().substr(0, 10),
                    resultado: ['Transacción creada correctamente']
                }
            )
        }

        this.setState({ resultado: resultado });
    }

    render() {
        return (
            <form className="modal-form">
                <label>Asunto
                    <input name="asunto" type="text" placeholder="Asunto"
                        value={this.state.asunto} onChange={this.handleChange} />
                </label>

                <label>Descripción
                    <textarea name="descripcion" placeholder="Descripción"
                        value={this.state.descripcion} onChange={this.handleChange} />
                </label>

                <label>Monto
                    <input type="number" name="monto"
                        value={this.state.monto} onChange={this.handleChange} />
                </label>

                <label>Fecha
                    <input type="date" name="fecha"
                        value={this.state.fecha} onChange={this.handleChange} />
                </label>

                <button type="submit" onClick={(event) => this.handleSubmit(event)}>Enviar</button>

                <div>Resultado: {this.state.resultado.map((resultado, index) => {
                    return <p key={"resultado" + index}>{resultado}</p>
                })}</div>
            </form>
        );
    }
}