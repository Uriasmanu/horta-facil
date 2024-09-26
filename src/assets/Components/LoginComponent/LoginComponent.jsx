import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './_LoginComponent.scss'

const LoginComponent = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { login, erro } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    }

    return (
        <div className="container-LoginComponent">
            <form className="form" onSubmit={handleSubmit}>
                <div className="title">Bem vindo(a)</div>
                <input
                    className="input"
                    name="email"
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="input"
                    name="password"
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="login-with">
                    {erro && <div className='erro-mensagem'>{erro}</div>}
                </div>
                <button className="button-confirm">Entrar →</button>
            </form>
        </div>
    )
}

export default LoginComponent;
