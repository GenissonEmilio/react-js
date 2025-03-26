function Evento({ numero }) {
    function meuEvento() {
        alert(`Numero é ${numero}`);
    }
    
    return (
        <>
            <p>Clique para dispara um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}

export default Evento;