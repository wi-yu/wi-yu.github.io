const BillsPage = (props) => {
    return (
        <div>
            <h1>Transacciones</h1>
            <table>

                <thead><tr>
                    <th>ID</th>
                    <th>Asunto</th>
                    <th>Descripción</th>
                    <th>Fecha</th>
                    <th>Monto</th>
                </tr></thead>
                <tbody>
                    {props.lasTransacciones.map(
                        /**
                         * 
                         * @param {Transacción} transacción 
                         * @param {Number} index 
                         * @returns 
                         */

                        (transacción, index) => {
                            return (
                                <tr key={index}>
                                    <td>{transacción.ID}</td>
                                    <td><input key={transacción.ID} type="text" max="90" onInput={(event) => transacción.asunto = event.target.value} defaultValue={transacción.asunto} /></td>
                                    <td><input key={transacción.ID} type="text" onInput={(event) => transacción.descripcion = event.target.value} defaultValue={transacción.descripcion} /></td>
                                    <td><input key={transacción.ID} type="date" onInput={(event) => transacción.fecha = event.target.value} defaultValue={transacción.fecha} /></td>
                                    <td><input key={transacción.ID} type="number" onInput={(event) => transacción.monto = event.target.value} defaultValue={transacción.monto}></input></td>
                                    <td><button onClick={() => props.removeElement(index)}>Eliminar</button></td>
                                </tr>)
                        })}
                </tbody>
            </table>
        </div >
    );
}

BillsPage.defaultProps = {
    lasTransacciones: [],
    removeElement: function () {
        console.log("Defina esta función")
    }
}