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
        this.state = {
            ID: props.lasTransacciones[props.lasTransacciones.length - 1].ID + 1,
            monto: 0,
            fecha: '',
            cliente: new Cliente("Anonimo", "Anonimo", null, null, null, null, null),
            estadoVenta: EstadoVenta.pendiente,
            direccion: '',
            repartidor: new Trabajador("Anonimo", "Anonimo", null, null, null, null, null)
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
        console.log(this.state.estadoVenta)

        let domicilio = new Domicilio(this.state.ID, this.state.monto, this.state.fecha, this.state.elCliente, this.state.estadoVenta, this.state.direcion, this.state.elRepartidor);
        this.props.lasTransacciones.push(domicilio);
        this.props.actualizarEstado(this.state.lasTransacciones);
        this.setState(
            {
                ID: this.state.ID + 1,
                monto: 0,
                fecha: '',
                cliente: new Cliente("Anonimo", "Anonimo", null, null, null, null, null, null),
                estadoVenta: EstadoVenta.pendiente,
                direccion: '',
                repartidor: new Trabajador("Anonimo", "Anonimo", null, null, null, null, null)
            }
        )

    }

    render() {
        return (
            <form className="modal-form">
                <label> Cliente
                    <select name="cliente" value={this.state.cliente} onChange={this.handleChange}>
                        <option value={new Cliente("Anonimo", "Anonimo", null, null, null, null, null)}>Anonimo</option>
                        {this.props.lasPersonas.map((persona, index) => {
                            if (persona instanceof Cliente) return <option key={index} value={persona}>{persona.nombre}</option>
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
                            if (persona instanceof Trabajador) return <option key={index} value={persona}>{persona.nombre}</option>
                        })}
                    </select>
                </label>

                <button type="submit" onClick={(event) => this.handleSubmit(event)}>Enviar</button>
            </form>
        );
    }
}