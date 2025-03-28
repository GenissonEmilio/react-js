import Button from "./eventos/Button";

function Evento({ numero }) {
    function meuEvento() {
        alert(`Numero é ${numero}`);
    }

    function segundoEvento() {
        alert("Segundo evento");
    }
    
    return (
        <>
            <p>Clique para dispara um evento:</p>
            <Button event={meuEvento} texto="Meu botão"/>
            <Button event={segundoEvento} texto="Segundo botão" />
        </>
    )
}

export default Evento;