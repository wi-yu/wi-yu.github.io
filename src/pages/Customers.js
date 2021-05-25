const CustumersPage = (props) => {

    return (
        <div>
            <div className="header-modal-h1">
                <Modal title="Nuevo Cliente" icon="fas fa-cash-register" float></Modal><h1>Clientes </h1>
            </div>

            <div className="overflow">
                <table >
                    <thead><tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Tipo Doc</th>
                        <th>Doc</th>
                        <th>Telefonos</th>
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
                                        <td>{cliente.telefonos.map((telefono, index) => <p key={"telefonoCliente" + cliente.numDocumento + index}>{telefono}</p>)}</td>
                                        <td>{cliente.correos.map((correo, index) => <p key={"correoCliente" + cliente.numDocumento + index}>{correo}</p>)}</td>
                                        <td>{cliente.misCompras.length}</td>
                                        <td><button onClick={() => props.removeElement(index)}>Eliminar</button></td>
                                    </tr>)
                            })}
                    </tbody>
                </table>
            </div>
            <h1>Trabajadores</h1>
            <div className="overflow">
                <table>
                    <thead><tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Tipo Doc</th>
                        <th>Doc</th>
                        <th>Telefonos</th>
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
                                        <td>{trabajador.telefonos.map((telefono, index) => <p key={"telefonotrabajador" + trabajador.numDocumento + index}>{telefono}</p>)}</td>
                                        <td>{trabajador.correos.map((correo, index) => <p key={"correotrabajador" + cliente.numDocumento + index}>{correo}</p>)}</td>
                                        <td><input key={"SalarioTrabajador" + trabajador.numDocumento} type="text" onInput={(event) => trabajador.salario = event.target.value} defaultValue={trabajador.salario} /></td>
                                        <td><button onClick={() => props.removeElement(index)}>Eliminar</button></td>
                                    </tr>)
                            })}
                    </tbody>
                </table>
            </div>
        </div >
    );
}

CustumersPage.defaultProps = {
    lasPersonas: []
}