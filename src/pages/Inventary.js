const InventaryPage = (props) => {
    return (
        <div>
            <h1>Inventario</h1>
            <table>

                <thead><tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>proveedor</th>
                </tr></thead>
                <tbody>
                    {props.losProductos.map(
                        /**
                         * 
                         * @param {Transacción} transacción 
                         * @param {Number} index 
                         * @returns 
                         */

                        (producto, index) => {
                            return (
                                <tr key={index}>
                                    <td>{producto.ID}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.precio}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>{producto.proveedor}</td>
                                </tr>)
                        })}
                </tbody>
            </table>
        </div >
    );
}

InventaryPage.defaultProps = {
    losProductos: []
}