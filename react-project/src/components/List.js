import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Item1" ano_lancamento={2023} />
                <Item marca="Item2" ano_lancamento={1998} />
                <Item marca="Item3" ano_lancamento={2047} />
                <Item />
            </ul>
        </>
    )
}

export default List;