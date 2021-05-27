class NuevaPersona extends React.Component {
    static defaultProps = {
        /** @type {Persona[]} */
        lasPersonas: [],
        tipo: TipoPersona.cliente,
        /** Actualiza la los datos en la pagina principal */
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
            resultado: [],
            salario: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    buscarPersona(documento) {
        let laPersona = null;

        this.props.lasPersonas.map((persona) => {
            if (persona.numDocumento == documento) {
                laPersona = persona;
            }
        });
        return laPersona;
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
            resultado.push("Ingrese el nombre de la persona");
            formIsValid = false;
        }

        if (this.state.apellido.length <= 0) {
            resultado.push("Ingrese el apellido de la persona");
            formIsValid = false;
        }

        if (this.state.numDocumento.length <= 0) {
            resultado.push("Ingrse el numero de documento");
            formIsValid = false;
        }
        if (this.buscarPersona(this.state.numDocumento) != null) {
            resultado.push("Ya existe una persona con este documento");
            formIsValid = false;
        }

        if (this.props.tipo == TipoPersona.trabajador && this.state.salario <= 0) {
            resultado.push("El trabajador necesita un salario");
            formIsValid = false;
        }

        if (formIsValid) {
            let persona;

            if (this.props.tipo == TipoPersona.cliente) {
                persona = new Cliente(this.state.nombre, this.state.apellido, this.state.tipoDoc, this.state.numDocumento, this.state.telefono, this.state.correos, this.state.direccions);
            } else {
                persona = new Trabajador(this.state.nombre, this.state.apellido, this.state.tipoDoc, this.state.numDocumento, this.state.telefono, this.state.correos, this.state.direccions, this.state.salario);
            }

            this.props.lasPersonas.push(persona);
            this.props.actualizarEstado(this.state.lasPersonas);
            this.setState({
                nombre: '',
                apellido: '',
                tipoDoc: TipoDoc.CC,
                numDocumento: '',
                telefono: 0,
                correos: '',
                direccions: '',
                resultado: [''],
                salario: 0
            }
            )
        }

        this.setState({ resultado: resultado });
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

                <label>Documento
                    <input name="numDocumento" type="text"
                        value={this.state.numDocumento} onChange={this.handleChange} />
                </label>

                <label>Telefono<input name="telefono" type="text"
                    value={this.state.telefono} onChange={this.handleChange} />
                </label>

                <label>Correos<input name="correos" type="text"
                    value={this.state.correos} onChange={this.handleChange} />
                </label>

                <label>Direcciones<input name="direccions" type="text"
                    value={this.state.direccions} onChange={this.handleChange} />
                </label>

                {(this.props.tipo == TipoPersona.trabajador) && <label>Salario
                    <input name="salario" type="number"
                        value={this.state.salario} onChange={this.handleChange} />
                </label>}

                <button type="submit" onClick={(event) => this.handleSubmit(event)}>Enviar</button>

                <div>Resultado: {this.state.resultado.map((resultado, index) => {
                    return <p key={"resultado" + index}>{resultado}</p>
                })}</div>
            </form>
        );
    }
}