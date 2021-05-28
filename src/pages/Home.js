
const HomePage = (props) => {
    let dinero = 0;

    {
        props.lasTransacciones.map((transación) => {
            dinero += Number(transación.monto);
        })
    }

    return (<div>
        <h1>Bienvenido</h1>
        <div><strong>DINERO</strong> {dinero} </div>
    </div>)
}