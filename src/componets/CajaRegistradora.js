class CajaRegistradora extends React.Component {
    static defaultProps = {
        /** @type {Transacción[]} */
        lasTransacciones: [],
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
        this.state = {
            ID: props.lasTransacciones[props.lasTransacciones.length - 1].ID + 1,
            asunto: '',
            descripcion: '',
            monto: 0,
            fecha: ''
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
        let transaccion = new Transacción(this.state.ID, this.state.asunto, this.state.descripcion, parseFloat(this.state.monto), new Date(this.state.fecha));
        this.props.lasTransacciones.push(transaccion);
        this.props.actualizarEstado(this.state.lasTransacciones);
        this.setState(
            {
                ID: this.state.ID + 1,
                asunto: '',
                descripcion: '',
                monto: 0,
                fecha: ''
            }
        )

    }

    render() {
        return (
            <form className="modal-form">
                <label>Asunto<input name="asunto" type="text" placeholder="Asunto" value={this.state.asunto} onChange={this.handleChange} /></label>
                <label>Descripción<textarea name="descripcion" placeholder="Descripción" value={this.state.descripcion} onChange={this.handleChange} /></label>
                <label>Monto<input type="number" name="monto" value={this.state.monto} onChange={this.handleChange} /></label>
                <label>Fecha<input type="date" name="fecha" value={this.state.fecha} onChange={this.handleChange} /></label>
                <button type="submit" onClick={(event) => this.handleSubmit(event)}>Enviar</button>
            </form>
        );
    }
}