const ToolBar = () => {
    return (
        <aside className="page-aside">
            <Modal title="Pedidos Pendientes" icon="fas fa-tasks" float></Modal>
            <Modal title="Caja" icon="fas fa-cash-register" float></Modal>
            <Modal title="Nuevo Pedido" icon="fas fa-cart-plus" float></Modal>
        </aside>
    );
}