let Pedido = (props) => {
    /** @type {Domicilio} */
    console.log("Hola que hace")
    let pedido = props.pedido;
    return (
        <div>
            <strong>{pedido.elCliente.nombre}</strong>
            <p>Dirección: {pedido.direcion}</p>
            <ul>
                Productos
            </ul>
        </div>
    );
}

let NuevoPedidio = () => {
    return (
        <div>
            <Input label="Cliente" />
            <Input label="Productos" />
            <Input label="Domicilio" />
        </div>
    );
}

let Input = (props) => {
    return (
        <div className="text-input">
            <span className="icon-input">{props.label}</span>
            <input type={props.type} />
        </div>
    );
}

Input.defaultProps = {
    label: "Label",
    type: "Text"
}

let ListItem = (props) => {
    return (
        <div className="list-item">
            <h2>{props.title}</h2>
            <div>
                {props.description}
                {props.children}
            </div>
        </div>
    );
}

ListItem.defaultProps = {
    title: "Add a title",
    description: "Add description here",
    children: <div></div>
}