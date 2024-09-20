import './_BotaoVoltar.scss'

const BotaoVoltar = () => {
    return (
        <div className="container-BotaoVoltar">
            <a className="fancy" href="#">
                <span className="top-key"></span>
                <span className="text">Voltar</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
            </a>
        </div>
    )
}

export default BotaoVoltar;