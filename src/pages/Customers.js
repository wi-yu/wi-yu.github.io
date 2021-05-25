const CustumersPage = (props) => {

    return (
        <div>
            <div className="header-modal-h1">
                <Modal title="Nuevo Cliente" icon="fas fa-plus" float>
                    <NuevoCliente actualizarEstado={(value) => props.actualizarEstado("lasPersonas", value)} lasPersonas={props.lasPersonas} />
                </Modal>
                <h1>Clientes </h1>
            </div>

            <LosClientes removeElement={props.removeElement} lasPersonas={props.lasPersonas} />

            <div className="header-modal-h1">
                <Modal title="Nuevo Trabajador" icon="fas fa-plus" float>
                    <NuevoTrabajador actualizarEstado={(value) => props.actualizarEstado("lasPersonas", value)} lasPersonas={props.lasPersonas} />
                </Modal>
                <h1>Trabajadores </h1>
            </div>
            <LosTrabajadores removeElement={props.removeElement} lasPersonas={props.lasPersonas} />
        </div >
    );
}

CustumersPage.defaultProps = {
    lasPersonas: []
}

const LosClientes = (props) => {
    return (
        <div>
            <div className="overflow">
                <table >
                    <thead><tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Tipo Doc</th>
                        <th>Doc</th>
                        <th>Telefono</th>
                        <th>Correos</th>
                        <th>Compras</th>
                    </tr></thead>

                    <tbody>
                        {props.lasPersonas.map(
                            /**
                             * 
                             * @param {Cliente} cliente 
                             * @param {Number} index 
                             * @returns 
                             */

                            (cliente, index) => {
                                return (
                                    (cliente instanceof Cliente) && <tr key={index}>
                                        <td><input key={"NombreCliente" + cliente.numDocumento} type="text" onInput={(event) => cliente.nombre = event.target.value} defaultValue={cliente.nombre} /></td>
                                        <td><input key={"ApellidoCliente" + cliente.numDocumento} type="text" onInput={(event) => cliente.apellido = event.target.value} defaultValue={cliente.apellido} /></td>
                                        <td><select key={"TipoDocCliente" + cliente.numDocumento} defaultValue={cliente.tipoDoc} onInput={(event) => cliente.tipoDoc = event.target.value} defaultValue={cliente.tipoDoc}>
                                            <option value={TipoDoc.CC}>{TipoDoc.CC}</option>
                                            <option value={TipoDoc.CE}>{TipoDoc.CE}</option>
                                            <option value={TipoDoc.TI}>{TipoDoc.TI}</option>
                                        </select></td>
                                        <td>{cliente.numDocumento}</td>
                                        <td>{cliente.telefono}</td>
                                        <td>{cliente.correo}</td>
                                        <td>{cliente.misCompras.length}</td>
                                        <td><button onClick={() => props.removeElement(index)}>Eliminar</button></td>
                                    </tr>)
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const LosTrabajadores = (props) => {
    return (
        <div>
            <div className="overflow">
                <table>
                    <thead><tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Tipo Doc</th>
                        <th>Doc</th>
                        <th>Telefono</th>
                        <th>Correos</th>
                        <th>Salario</th>
                    </tr></thead>

                    <tbody>
                        {props.lasPersonas.map(
                            /**
                             * 
                             * @param {Cliente} cliente 
                             * @param {Number} index 
                             * @returns 
                             */

                            (trabajador, index) => {
                                return (
                                    (trabajador instanceof Trabajador) && <tr key={index}>
                                        <td><input key={"Nombretrabajador" + trabajador.numDocumento} type="text" onInput={(event) => trabajador.nombre = event.target.value} defaultValue={trabajador.nombre} /></td>
                                        <td><input key={"Apellidotrabajador" + trabajador.numDocumento} type="text" onInput={(event) => trabajador.apellido = event.target.value} defaultValue={trabajador.apellido} /></td>
                                        <td><select key={"TipoDoctrabajador" + trabajador.numDocumento} defaultValue={trabajador.tipoDoc} onInput={(event) => trabajador.tipoDoc = event.target.value} defaultValue={trabajador.tipoDoc}>
                                            <option value={TipoDoc.CC}>{TipoDoc.CC}</option>
                                            <option value={TipoDoc.CE}>{TipoDoc.CE}</option>
                                            <option value={TipoDoc.TI}>{TipoDoc.TI}</option>
                                        </select></td>
                                        <td>{trabajador.numDocumento}</td>
                                        <td>{trabajador.telefono}</td>
                                        <td>{trabajador.correo}</td>
                                        <td><input key={"SalarioTrabajador" + trabajador.numDocumento} type="text" onInput={(event) => trabajador.salario = event.target.value} defaultValue={trabajador.salario} /></td>
                                        <td><button onClick={() => props.removeElement(index)}>Eliminar</button></td>
                                    </tr>)
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}