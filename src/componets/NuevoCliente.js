class NuevoCliente extends React.Component {
    static defaultProps = {
        /** @type {Transacción[]} */
        lasPersonas: [],
        actualizarEstado: () => console.log("Defina 'actualizarEstado'")
    }

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            tipoDoc: TipoDoc.CC,
            numDocumento: '',
            telefono: 0,
            correos: '',
            direccions: '',
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
        let cliente = new Cliente(this.state.nombre, this.state.apellido, this.state.tipoDoc, this.state.numDocumento, this.state.telefono, this.state.correos, this.state.direccions, this.state.salario);
        this.props.lasPersonas.push(cliente);
        this.props.actualizarEstado(this.state.lasPersonas);
        this.setState(
            {
                nombre: '',
                apellido: '',
                tipoDoc: TipoDoc.CC,
                numDocumento: '',
                telefono: 0,
                correos: '',
                direccions: '',
            }
        )

    }

    render() {
        return (
            <form className="modal-form">
                <label>Nombre<input name="nombre" type="text" value={this.state.nombre} onChange={this.handleChange} /></label>
                <label>Apellido<input name="apellido" type="text" value={this.state.apellido} onChange={this.handleChange} /></label>

                <label> Tipo Doc
                    <select name="tipoDoc" value={this.state.tipoDoc} onChange={this.handleChange}>
                        <option value={TipoDoc.CC}>{TipoDoc.CC}</option>
                        <option value={TipoDoc.CE}>{TipoDoc.CE}</option>
                        <option value={TipoDoc.TI}>{TipoDoc.TI}</option>
                    </select>
                </label>

                <label>Documento<input name="numDocumento" type="text" value={this.state.numDocumento} onChange={this.handleChange} /></label>
                <label>Telefono<input name="telefono" type="text" value={this.state.telefono} onChange={this.handleChange} /></label>
                <label>Correos<input name="correos" type="text" value={this.state.correos} onChange={this.handleChange} /></label>
                <label>Direcciones<input name="direccions" type="text" value={this.state.direccions} onChange={this.handleChange} /></label>
                <button type="submit" onClick={(event) => this.handleSubmit(event)}>Enviar</button>
            </form>
        );
    }
}

class NuevoTrabajador extends React.Component {
    static defaultProps = {
        /** @type {Transacción[]} */
        lasPersonas: [],
        actualizarEstado: () => console.log("Defina 'actualizarEstado'")
    }

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            tipoDoc: TipoDoc.CC,
            numDocumento: '',
            telefono: 0,
            correos: '',
            direccions: '',
            salario: 0
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
        let trabajador = new Trabajador(this.state.nombre, this.state.apellido, this.state.tipoDoc, this.state.numDocumento, this.state.telefono, this.state.correos, this.state.direccions, this.state.salario);
        this.props.lasPersonas.push(trabajador);
        this.props.actualizarEstado(this.state.lasPersonas);
        this.setState(
            {
                nombre: '',
                apellido: '',
                tipoDoc: TipoDoc.CC,
                numDocumento: '',
                telefono: 0,
                correos: '',
                direccions: '',
                salario: 0
            }
        )

    }

    render() {
        return (
            <form className="modal-form">
                <label>Nombre<input name="nombre" type="text" value={this.state.nombre} onChange={this.handleChange} /></label>
                <label>Apellido<input name="apellido" type="text" value={this.state.apellido} onChange={this.handleChange} /></label>

                <label> Tipo Doc
                    <select name="tipoDoc" value={this.state.tipoDoc} onChange={this.handleChange}>
                        <option value={TipoDoc.CC}>{TipoDoc.CC}</option>
                        <option value={TipoDoc.CE}>{TipoDoc.CE}</option>
                        <option value={TipoDoc.TI}>{TipoDoc.TI}</option>
                    </select>
                </label>

                <label>Documento<input name="numDocumento" type="text" value={this.state.numDocumento} onChange={this.handleChange} /></label>
                <label>Telefono<input name="telefono" type="text" value={this.state.telefono} onChange={this.handleChange} /></label>
                <label>Correos<input name="correos" type="text" value={this.state.correos} onChange={this.handleChange} /></label>
                <label>Direcciones<input name="direccions" type="text" value={this.state.direccions} onChange={this.handleChange} /></label>
                <label>Salario<input name="salario" type="number" value={this.state.salario} onChange={this.handleChange} /></label>

                <button type="submit" onClick={(event) => this.handleSubmit(event)}>Enviar</button>
            </form>
        );
    }
}