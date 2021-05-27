const PeoplePage = (props) => {

    return (
        <div>
            <div className="header-modal-h1">
                <Modal title="Nuevo Cliente" icon="fas fa-plus" float>
                    <NuevaPersona actualizarEstado={(value) => props.actualizarEstado("lasPersonas", value)} lasPersonas={props.lasPersonas} />
                </Modal>
                <h1>Clientes </h1>
            </div>

            <LosClientes actualizarEstado={(value) => props.actualizarEstado("lasPersonas", value)} removeElement={props.removeElement} lasPersonas={props.lasPersonas} />

            <div className="header-modal-h1">
                <Modal title="Nuevo Trabajador" icon="fas fa-plus" float>
                    <NuevaPersona tipo={TipoPersona.trabajador} actualizarEstado={(value) => props.actualizarEstado("lasPersonas", value)} lasPersonas={props.lasPersonas} />
                </Modal>
                <h1>Trabajadores </h1>
            </div>
            <LosTrabajadores actualizarEstado={(value) => props.actualizarEstado("lasPersonas", value)} removeElement={props.removeElement} lasPersonas={props.lasPersonas} />
        </div >
    );
}

PeoplePage.defaultProps = {
    lasPersonas: []
}

class LosClientes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lasPersonas: props.lasPersonas
        }
    }

    render() {
        return (<div className="overflow">
            <table>
                <thead><tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Tipo Doc</th>
                    <th>Doc</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Compras</th>
                </tr></thead>

                <tbody>{this.state.lasPersonas.map((cliente, index) => {
                    return ((cliente instanceof Cliente) && <tr key={"row" + index}>

                        <td><input
                            key={"NombreCliente" + cliente.numDocumento}
                            type="text"
                            onInput={(event) => {
                                cliente.nombre = event.target.value;
                                this.props.actualizarEstado(this.state.lasPersonas)
                            }}
                            defaultValue={cliente.nombre} />
                        </td>

                        <td><input
                            key={"ApellidoCliente" + cliente.numDocumento}
                            type="text"
                            onInput={(event) => {
                                cliente.apellido = event.target.value;
                                this.props.actualizarEstado(this.state.lasPersonas)
                            }}
                            defaultValue={cliente.apellido} />
                        </td>

                        <td><select
                            key={"TipoDocCliente" + cliente.numDocumento}
                            onInput={(event) => {
                                cliente.tipoDoc = event.target.value;
                                this.props.actualizarEstado(this.state.lasPersonas)
                            }}
                            defaultValue={cliente.tipoDoc}>
                            <option value={TipoDoc.CC}>{TipoDoc.CC}</option>
                            <option value={TipoDoc.CE}>{TipoDoc.CE}</option>
                            <option value={TipoDoc.TI}>{TipoDoc.TI}</option>
                        </select></td>

                        <td>{cliente.numDocumento}</td>

                        <td><input
                            key={"NumeroTelefonoCliente" + cliente.numDocumento}
                            type="text"
                            onInput={(event) => {
                                cliente.telefono = event.target.value;
                                this.props.actualizarEstado(this.state.lasPersonas)
                            }}
                            defaultValue={cliente.telefono} />
                        </td>

                        <td><input
                            key={"CorreCliente" + cliente.numDocumento}
                            type="text"
                            onInput={(event) => {
                                cliente.correo = event.target.value;
                                this.props.actualizarEstado(this.state.lasPersonas)
                            }}
                            defaultValue={cliente.correo} />
                        </td>

                        <td>{cliente.misCompras.length}</td>

                        <td><button onClick={() => confirm("¿Quiere eliminar este cliente?") ? props.removeElement(index) : null}>Eliminar</button></td>
                    </tr>)
                })}
                </tbody>
            </table>
        </div>
        );
    }
}

// const LosTrabajadores = (props) => {

class LosTrabajadores extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lasPersonas: props.lasPersonas
        }
    }

    render() {
        return (<div className="overflow">
            <table>
                <thead><tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Tipo Doc</th>
                    <th>Doc</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Salario</th>
                    <th>Ingreso</th>
                </tr></thead>

                <tbody>{this.state.lasPersonas.map((trabajador, index) => {
                    return ((trabajador instanceof Trabajador) && <tr key={index}>

                        <td><input
                            key={"Nombretrabajador" + trabajador.numDocumento}
                            type="text"
                            onInput={(event) => {
                                trabajador.nombre = event.target.value;
                                this.props.actualizarEstado(this.state.lasPersonas);
                            }}
                            defaultValue={trabajador.nombre} />
                        </td>

                        <td><input key={"Apellidotrabajador" + trabajador.numDocumento}
                            type="text"
                            onInput={(event) => {
                                trabajador.apellido = event.target.value;
                                this.props.actualizarEstado(this.state.lasPersonas);
                            }}
                            defaultValue={trabajador.apellido} />
                        </td>

                        <td><select key={"TipoDoctrabajador" + trabajador.numDocumento}
                            onInput={(event) => {
                                trabajador.tipoDoc = event.target.value;
                                this.props.actualizarEstado(this.state.lasPersonas);
                            }}
                            defaultValue={trabajador.tipoDoc}>

                            <option value={TipoDoc.CC}>{TipoDoc.CC}</option>
                            <option value={TipoDoc.CE}>{TipoDoc.CE}</option>
                            <option value={TipoDoc.TI}>{TipoDoc.TI}</option>
                        </select></td>

                        <td>{trabajador.numDocumento}</td>

                        <td><input
                            key={"NumeroTelefonoTrabajador" + trabajador.numDocumento}
                            type="text"
                            onInput={(event) => {
                                trabajador.telefono = event.target.value;
                                this.props.actualizarEstado(this.state.lasPersonas)
                            }}
                            defaultValue={trabajador.telefono} />
                        </td>

                        <td><input
                            key={"CorreoTrabajador" + trabajador.numDocumento}
                            type="text"
                            onInput={(event) => {
                                trabajador.correo = event.target.value;
                                this.props.actualizarEstado(this.state.lasPersonas)
                            }}
                            defaultValue={trabajador.correo} />
                        </td>

                        <td><input
                            key={"SalarioTrabajador" + trabajador.numDocumento}
                            type="number"
                            onInput={(event) => {
                                trabajador.salario = Number(event.target.value);
                                this.props.actualizarEstado(this.state.lasPersonas);
                            }}
                            defaultValue={trabajador.salario} />
                        </td>

                        <td><input
                            key={"FechaTrabajador" + trabajador.numDocumento}
                            type="date"
                            onInput={(event) => {
                                trabajador.fechaIngreso = new Date(event.target.value);
                                this.props.actualizarEstado(this.state.lasPersonas);
                            }}
                            defaultValue={(trabajador.fechaIngreso).toISOString().substr(0, 10)} />
                        </td>

                        <td><button onClick={() => confirm("¿Quiere eliminar este trabajador?") ? props.removeElement(index) : null}>Eliminar</button></td>
                    </tr>)
                })}
                </tbody>
            </table>
        </div>
        )
    }
}