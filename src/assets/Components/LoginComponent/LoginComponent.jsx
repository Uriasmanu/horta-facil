import { useNavigate } from 'react-router-dom';
import './_LoginComponent.scss'

const LoginComponent = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/inicio'); // Volta para a última página acessada
    };

    return (
        <div className="container-LoginComponent">
            <form className="form">
                <div className="title">Bem vindo(a)</div>
                <input className="input" name="email" placeholder="Email" type="email" />
                <input className="input" name="password" placeholder="Senha" type="password" />
                <div className="login-with">
                  
                </div>
                <button className="button-confirm" onClick={handleClick}>Entrar →</button>
            </form>
        </div>
    )
}

export default LoginComponent;
