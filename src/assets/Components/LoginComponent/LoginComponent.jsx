import './_LoginComponent.scss'

const LoginComponent = () => {
    return (
        <div className="container-LoginComponent">
            <form className="form">
                <div className="title">Bem vindo(a)</div>
                <input className="input" name="email" placeholder="Email" type="email" />
                <input className="input" name="password" placeholder="Senha" type="password" />
                <div className="login-with">
                  
                </div>
                <button className="button-confirm">Entrar →</button>
            </form>
        </div>
    )
}

export default LoginComponent;
