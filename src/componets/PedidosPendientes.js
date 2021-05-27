class PedidosPendientes extends React.Component {

    static defaultProps = {
        /** @type {Transacción[]} */
        lasTransacciones: [],
        /** Actualiza la los datos en la pagina principal */
        actualizarEstado: () => console.log("Defina 'actualizarEstado'"),
        /** Elimina un elemento de la lista */
        autoDestruccion: () => console.log("Defina 'autoDestrucción'")
    }

    static propTypes = {
        /** @type {Transacción[]} */
        lasTransacciones: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.instanceOf(Transacción)),
            PropTypes.arrayOf(PropTypes.instanceOf(Venta)),
            PropTypes.arrayOf(PropTypes.instanceOf(Compra)),
            PropTypes.arrayOf(PropTypes.instanceOf(Domicilio))]).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            /** @type {Transacción[]} */
            lasTransacciones: props.lasTransacciones
        }

        this.removeLista = this.removeLista.bind(this);
    }

    /**
     * 
     * @param {Transacción} Transacción     Transacción cancelada o entregada
     * @param {String}      acción          Acción sobre la transacción: cancelar o entregar
     * @param {Number}      index           Posición de la lista
     */
    removeLista(Transacción, acción, index) {
        let lista = this.state.lasTransacciones;
        lista.splice(index, 1); // Eliminar este elemento

        this.setState({ "lasTransacciones": lista });
        if (acción == "CANCELAR") {
            Transacción.cancelar();

            // Actualizar principal
            this.props.actualizarEstado(this.state.lasTransacciones);
        } else Transacción.entregar();
    }

    render() {
        return <div> {this.state.lasTransacciones.map((Transacción, index) => {
            return (Transacción instanceof Domicilio && Transacción.estadoVenta == EstadoVenta.pendiente) &&

                <div key={"pedido-pendiente" + index} className="pedidio">

                    {(Transacción.elCliente != null) && <strong>{Transacción.elCliente.nombre}</strong>}

                    <p>Dirección: {Transacción.direcion}</p>

                    <ul>
                        {Transacción.losProductos.map((detalleVenta, indexProducto) => {
                            <li key={"pedido-pendiente-producto" + indexProducto}>Producto: {detalleVenta.producto.nombre} cantidad: {detalleVenta.catidad}</li>
                        })}
                    </ul>

                    <div>
                        <button value={index} onClick={() => this.removeLista(Transacción, "CANCELAR", index)}>Cancelar</button>
                        <button onClick={() => this.removeLista(Transacción, "ENTREGAR", index)}>Entregar</button>
                    </div>

                </div>

        })}</div>
    }
}