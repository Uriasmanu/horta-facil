import { useNavigate } from 'react-router-dom';
import './_Navegacao.scss'
import PropTypes from 'prop-types';  // Corrigido para PropTypes

const Navegacao = ({ icone, iconeAlt, rota }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${rota}`); // Volta para a última página acessada
    };

    return (
        <div className="container-Navegacao">
            <button  onClick={handleClick}>
                <img src={icone} alt={iconeAlt} />
            </button>
        </div>
    );
}

Navegacao.propTypes = {
    icone: PropTypes.string.isRequired,      // Validação do tipo das props
    iconeAlt: PropTypes.string.isRequired,   // Nome adequado para o atributo "alt"
    rota: PropTypes.string.isRequired
};

export default Navegacao;
