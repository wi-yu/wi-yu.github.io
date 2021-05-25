class PedidosPendientes extends React.Component {

    static defaultProps = {
        /** @type {Transacción[]} */
        lasTransacciones: [],
        actualizarEstado: () => console.log("Defina 'actualizarEstado'"),
        autoDestruccion: () => console.log("Defina 'autoDestrucción'")
    }
    static propTypes = {
        lasTransacciones: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.instanceOf(Transacción)),
            PropTypes.arrayOf(PropTypes.instanceOf(Venta)),
            PropTypes.arrayOf(PropTypes.instanceOf(Compra)),
            PropTypes.arrayOf(PropTypes.instanceOf(Domicilio))]).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            lasTransacciones: props.lasTransacciones
        }
    }

    /**
     * 
     * @param {Transacción} Transacción 
     * @param {String} acción 
     * @param {Number} index 
     */
    removeLista(Transacción, acción, index) {
        if (acción == "CANCELAR") {
            Transacción.cancelar();
        } else {
            Transacción.entregar();
        }
        let lista = this.state.lasTransacciones;
        lista.splice(index, 1);

        this.setState({ "lasTransacciones": lista });
        this.props.actualizarEstado(this.state.lasTransacciones);
    }

    render() {
        return <div>
            {this.state.lasTransacciones.map((Transacción, index) => {

                return (
                    Transacción instanceof Domicilio && Transacción.estadoVenta == EstadoVenta.pendiente) &&
                    <div key={"pedido" + index} className="pedidio">
                        {(Transacción.elCliente != null) && <strong>{Transacción.elCliente.nombre}</strong>}
                        <p>Dirección: {Transacción.direcion}</p>
                        <ul>
                            {Transacción.losProductos.map((detalleVenta, indexProducto) => {
                                <li key={"producto" + indexProducto}>Producto: {detalleVenta.producto.nombre} cantidad: {detalleVenta.catidad}</li>
                            })}
                        </ul>
                        <div>
                            <button value={index} onClick={() => this.removeLista(Transacción, "CANCELAR", index)}>Cancelar</button>
                            <button onClick={() => this.removeLista(Transacción, "ENTREGAR", index)}>Entregar</button>
                        </div>
                    </div>
            })}
        </div>
    }
}