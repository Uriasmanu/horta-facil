import { useNavigate } from 'react-router-dom';
import './_BotaoVoltar.scss'

const BotaoVoltar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1); // Volta para a última página acessada
    };

    return (
        <div className="container-BotaoVoltar">
            <button className="fancy" onClick={handleClick}>
                <span className="top-key"></span>
                <span className="text">Voltar</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
            </button>
        </div>
    )
}

export default BotaoVoltar;