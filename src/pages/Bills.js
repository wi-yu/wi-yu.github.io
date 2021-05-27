class BillsPage extends React.Component {

    static defaultProps = {
        /** @type {Transacción[]} */
        lasTransacciones: [],
        /** Actualiza la los datos en la pagina principal */
        actualizarEstado: () => console.log("Defina 'actualizarEstado'"),
        removeElement: function () {
            console.log("Defina esta función")
        }
    }

    static propTypes = {
        /** @type {Transacción[]} */
        lasTransacciones: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.instanceOf(Transacción)),
            PropTypes.arrayOf(PropTypes.instanceOf(Venta)),
            PropTypes.arrayOf(PropTypes.instanceOf(Compra)),
            PropTypes.arrayOf(PropTypes.instanceOf(Domicilio))]).isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            lasTransacciones: props.lasTransacciones
        }
    }

    render() {
        return (<div>
            <div className="header-modal-h1">
                <Modal title="Caja" icon="fas fa-cash-register" float>
                    <CajaRegistradora
                        actualizarEstado={this.props.actualizarEstado}
                        lasTransacciones={this.props.lasTransacciones} />
                </Modal>
                <h1>Transacciones</h1>
            </div>

            <table>

                <thead><tr>
                    <th>ID</th><th>Asunto</th><th>Descripción</th><th>Fecha</th><th>Monto</th>
                </tr></thead>

                <tbody>
                    {this.state.lasTransacciones.map((transacción, index) => {
                        return (<tr key={index}><td>{transacción.ID}</td>

                            <td><input key={transacción.ID} type="text" max="90"
                                onInput={(event) => { event.target.value.length > 0 ? transacción.asunto = event.target.value : null }}
                                defaultValue={transacción.asunto} />
                            </td>

                            <td><input key={transacción.ID} type="text"
                                onInput={(event) => transacción.descripcion = event.target.value}
                                defaultValue={transacción.descripcion} />
                            </td>

                            <td><input key={transacción.ID} type="date"
                                onInput={(event) => transacción.fecha = new Date(event.target.value)}
                                defaultValue={(transacción.fecha).toISOString().substr(0, 10)} />
                            </td>

                            <td><input key={transacción.ID} type="number"
                                onInput={(event) => transacción.monto = event.target.value}
                                defaultValue={transacción.monto} />
                            </td>

                            <td><button
                                onClick={() => { confirm("¿Quiere eliminar esta transacción?") ? this.props.removeElement(index) : null }}>
                                Eliminar</button>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div >
        );
    }
}
