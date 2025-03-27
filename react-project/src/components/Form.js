import { useState } from 'react';

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault();
        alert(`Nome: ${name}\nSenha: ${password}`);
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <h1>Meu formulario</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome" 
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" placeholder="Digite sua senha" id="password" name="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;