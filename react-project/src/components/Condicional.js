import { useState } from 'react';

function Condicional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e) {
        e.preventDefault();
        if (email) {
            setUserEmail(email);
        } else {
            alert("Digite um e-mail valido!")
        }
    }

    function limparEmail() {
        setUserEmail('');
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" placeholder='Digite seu e-mail'
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit" onClick={enviarEmail}>Enviar</button>
                </div>
                {userEmail && (
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional;