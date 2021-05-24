const Pedido = (props) => {
    /** @type {Domicilio} */
    let pedido = props.pedido;
    let autoDestruccion = props.autoDestruccion;

    if (pedido != null) {
        let arrayPedidos = [];
        for (let i = 0; i < pedido.losProductos.length; i++) {
            let detalleVenta = pedido.losProductos[i];

            arrayPedidos.push(
                <li key={i}>Producto: {detalleVenta.producto.nombre} cantidad: {detalleVenta.catidad}</li>
            );
        }
        return (
            <div className="pedidio">
                <strong>{pedido.elCliente.nombre}</strong>
                <p>Dirección: {pedido.direcion}</p>
                <ul>
                    {arrayPedidos}
                </ul>
                <div>
                    <button onClick={() => { pedido.cancelar(); autoDestruccion() }}>Cancelar</button>
                    <button onClick={() => { pedido.entregar(); autoDestruccion() }}>Entregar</button>
                </div>
            </div>
        );
    } else {
        return <div>Pedido no encontrado</div>
    }
}

Pedido.defaultProp = {
    Pedido: null,
    autoDestruccion: () => console.log("¡Pasa la auto destrucción!")
}