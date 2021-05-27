class NuevoPedido extends React.Component {

    static defaultProps = {
        /** @type {Transacción[]} */
        lasTransacciones: [],
        /** @type {Persona[]} */
        lasPersonas: [],
        /** @type {Persona[]} */
        lasPersonas: [],
        /** Actualiza la los datos en la pagina principal */
        actualizarEstado: () => console.log("Defina 'actualizarEstado'")
    }

    static propTypes = {
        /** @type {Transacción[]} */
        lasTransacciones: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.instanceOf(Transacción)),
            PropTypes.arrayOf(PropTypes.instanceOf(Venta)),
            PropTypes.arrayOf(PropTypes.instanceOf(Compra)),
            PropTypes.arrayOf(PropTypes.instanceOf(Domicilio))]).isRequired,
        /** @type {Persona[]} */
        lasPersonas: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.instanceOf(Persona)),
            PropTypes.arrayOf(PropTypes.instanceOf(Cliente)),
            PropTypes.arrayOf(PropTypes.instanceOf(Trabajador))]).isRequired,
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
            monto: 0,
            fecha: (new Date()).toISOString().substr(0, 10),
            cliente: 0,
            estadoVenta: EstadoVenta.pendiente,
            direccion: '',
            repartidor: 0,
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

        if (this.state.fecha != null && new Date(this.state.fecha) == "Invalid Date") {
            resultado.push("Ingrese una fecha valida.");
            formIsValid = false;
        }

        if (this.props.lasPersonas[Number(this.state.cliente)] == null) {
            resultado.push("Cliente no valido.");
            formIsValid = false;
        }

        if (this.state.estadoVenta == EstadoVenta.pendiente && this.props.lasPersonas[Number(this.state.repartidor)] == undefined) {
            resultado.push("Trabajador no valido");
            formIsValid = false;
        }


        if (formIsValid) {
            let pedido;

            if (this.state.estadoVenta == EstadoVenta.pendiente) {
                pedido = new Domicilio(
                    this.state.ID,
                    this.state.monto,
                    new Date(this.state.fecha),
                    this.props.lasPersonas[Number(this.state.cliente)],
                    this.state.estadoVenta,
                    this.state.direcion,
                    this.props.lasPersonas[Number(this.state.repartidor)]);
            } else {
                pedido = new Venta(
                    this.state.ID,
                    this.state.monto,
                    new Date(this.state.fecha),
                    this.props.lasPersonas[Number(this.state.cliente)]);
            }

            this.props.lasPersonas[this.state.cliente].nuevaCompra(pedido);

            // Añadir el cliente
            let lasTransacciones = this.state.lasTransacciones;
            lasTransacciones.push(pedido);
            this.props.actualizarEstado("lasTransacciones", lasTransacciones);
            this.props.actualizarEstado("lasPersonas", this.props.lasPersonas);

            // Regresar al estado original
            this.setState(
                {
                    lasTransacciones: lasTransacciones,
                    ID: this.ID(lasTransacciones),
                    monto: 0,
                    fecha: (new Date()).toISOString().substr(0, 10),
                    cliente: 0,
                    estadoVenta: EstadoVenta.pendiente,
                    direccion: '',
                    repartidor: 0,
                    resultado: ['']
                }
            )
            resultado.push("Nuevo pedido creado Exitosamente");
        }

        this.setState({ resultado: resultado });
    }

    render() {
        return (<form className="modal-form">

            <label> Cliente
                <select name="cliente" value={this.state.cliente} onChange={(event) => this.handleChange(event)}>
                    {this.props.lasPersonas.map((persona, index) => {
                        return (persona instanceof Cliente) && <option key={"persona" + index} value={index}>{persona.nombre}</option>
                    })}
                </select>
            </label>

            <label>Monto <input required type="number" name="monto"
                value={this.state.monto} onChange={this.handleChange} />
            </label>

            <label>Fecha <input required type="date" name="fecha"
                value={this.state.fecha} onChange={this.handleChange} />
            </label>

            <label>dirección<input required type="text" name="direccion"
                value={this.state.direccion} onChange={this.handleChange} />
            </label>

            <label> Estado
                <select required name="estadoVenta" value={this.state.estadoVenta} onChange={this.handleChange}>
                    <option value={EstadoVenta.pendiente}>{EstadoVenta.pendiente}</option>
                    <option value={EstadoVenta.completado}>{EstadoVenta.completado}</option>
                </select>
            </label>

            {(this.state.estadoVenta == EstadoVenta.pendiente) && <label> Trabajador
                <select required name="repartidor" value={this.state.repartidor} onChange={this.handleChange}>
                    {this.props.lasPersonas.map((persona, index) => {
                        return (persona instanceof Trabajador) && <option key={"trabajador" + index} value={index}>{persona.nombre}</option>
                    })}
                </select>
            </label>}

            <button type="submit" onClick={this.handleSubmit}>Enviar</button>
            <div>Resultado: {this.state.resultado.map((resultado, index) => {
                return <p key={"resultado" + index}>{resultado}</p>
            })}</div>
        </form >
        );
    }
}