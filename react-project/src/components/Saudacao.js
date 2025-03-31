function Saudacao({ name }) {

    function gerarSaudacao(anyName) {
        return `Olá, ${anyName}, prazer em te conhecer`
    }

    return (
        <>
            {name && (
                <p>{gerarSaudacao(name)}</p>
            )}
        </>
    )
}

export default Saudacao;