function MinhaLista({ itens }) {
    return (
        <>
            <h3>Elementos da lista</h3>
            {
                itens.length > 0 ? (
                itens.map((item) => (
                    <p key={item.id}>{item.name}</p>
                ))) : (
                    <p>Não há itens na lista</p>
                )
            }
        </>
    )
}

export default MinhaLista;