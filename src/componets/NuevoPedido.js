class NuevoPedido extends React.Component {
    static defaultProps = {
        /** @type {Transacción[]} */
        lasTransacciones: [],
        /** @type {Persona[]} */
        lasPersonas: [],
        actualizarEstado: () => console.log("Defina 'actualizarEstado'")
    }
    static propTypes = {
        lasTransacciones: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.instanceOf(Transacción)),
            PropTypes.arrayOf(PropTypes.instanceOf(Venta)),
            PropTypes.arrayOf(PropTypes.instanceOf(Compra)),
            PropTypes.arrayOf(PropTypes.instanceOf(Domicilio))]).isRequired,
        lasPersonas: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.instanceOf(Persona)),
            PropTypes.arrayOf(PropTypes.instanceOf(Cliente)),
            PropTypes.arrayOf(PropTypes.instanceOf(Trabajador))]).isRequired,
    }

    constructor(props) {
        super(props);

        this.ID = (lista) => {
            if (lista.length > 0) {
                return lista[lista.length - 1].ID + 1
            } else {
                return lista.length + 1
            }
        }
        this.state = {
            ID: this.ID(props.lasTransacciones),
            monto: 0,
            fecha: '',
            cliente: new Cliente("Anonimo", "Anonimo", null, null, null, null, null),
            estadoVenta: EstadoVenta.pendiente,
            direccion: '',
            repartidor: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();


        let domicilio = new Domicilio(this.state.ID, this.state.monto, this.state.fecha, this.props.lasPersonas[this.state.cliente], this.state.estadoVenta, this.state.direcion, this.props.lasPersonas[this.state.repartidor]);
        if (this.state.elCliente) elCliente.nuevaCompra(domicilio);

        this.props.lasTransacciones.push(domicilio);
        this.props.actualizarEstado("lasTransacciones", this.props.lasTransacciones);
        this.props.actualizarEstado("lasPersonas", this.props.lasPersonas);

        this.setState(
            {
                ID: this.state.ID + 1,
                monto: 0,
                fecha: '',
                cliente: '',
                estadoVenta: EstadoVenta.pendiente,
                direccion: '',
                repartidor: ''
            }
        )

    }
    render() {

        return (
            <form className="modal-form">

                <label> Cliente
                    <select name="cliente" value={this.state.cliente} onChange={this.handleChange}>
                        <option key={"PersonaPorDefecto"} value={new Cliente("Anonimo", "Anonimo", null, null, null, null, null)}>Anonimo</option>
                        {this.props.lasPersonas.map((persona, index) => {
                            return (persona instanceof Cliente) && <option key={"persona" + index} value={index}>{persona.nombre}</option>
                        })}
                    </select>
                </label>

                <label>Monto<input type="number" name="monto" value={this.state.monto} onChange={this.handleChange} /></label>
                <label>Fecha<input type="date" name="fecha" value={this.state.fecha} onChange={this.handleChange} /></label>
                <label>dirección<input type="text" name="direccion" value={this.state.direccion} onChange={this.handleChange} /></label>

                <label> Estado
                    <select name="estadoVenta" value={this.state.estadoVenta} onChange={this.handleChange}>
                        <option value={EstadoVenta.pendiente}>{EstadoVenta.pendiente}</option>
                        <option value={EstadoVenta.completado}>{EstadoVenta.completado}</option>
                    </select>
                </label>

                <label> Trabajador
                    <select name="repartidor" value={this.state.repartidor} onChange={this.handleChange}>
                        <option value={new Trabajador("Anonimo", "Anonimo", null, null, null, null, null)}>Anonimo</option>
                        {this.props.lasPersonas.map((persona, index) => {
                            return (persona instanceof Trabajador) && <option key={"trabajador" + index} value={index}>{persona.nombre}</option>
                        })}
                    </select>
                </label>

                <button type="submit" onClick={(event) => this.handleSubmit(event)}>Enviar</button>
            </form>
        );
    }
}