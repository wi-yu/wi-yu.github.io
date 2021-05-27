const InventaryPage = (props) => {
    return (<div>
        <div className="header-modal-h1">
            <Modal title="Nuevo Cliente" icon="fas fa-plus" float>
                <NuevoProducto
                    actualizarEstado={(value) => props.actualizarEstado("losProductos", value)}
                    losProductos={props.losProductos} />
            </Modal>
            <h1>Los productos</h1>
        </div>

        <LosProductos removeElement={props.removeElement} losProductos={props.losProductos} />
    </div >
    );
}

InventaryPage.defaultProps = {
    /** @type {Producto[]} */
    losProductos: [],
    /** Actualiza la los datos en la pagina principal */
    actualizarEstado: () => console.log("Defina 'actualizarEstado'"),
    /** Remover un elemento en la pagina principal */
    removeElement: () => console.log("Defina 'removeElement'")
}

const LosProductos = (props) => {

    return (<div className="overflow">
        <table>

            <thead><tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
            </tr></thead>
            <tbody>
                {props.losProductos.map((producto, index) => {
                    return (
                        <tr key={index}>
                            <td>{producto.ID}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.cantidad}</td>
                            <td><button onClick={() => confirm("¿Quiere eliminar este producto?") ? props.removeElement(index) : null}>Eliminar</button></td>
                        </tr>)
                })}
            </tbody>
        </table>
    </div>)
}