function Pessoa({ image, name, age, profession }) {

    return (
        <div>
            <img src={image} alt={name} />
            <h2>Nome: {name}</h2>
            <p>Idade: {age}</p>
            <p>Profissão: {profession}</p>
        </div>
    )
}

export default Pessoa;