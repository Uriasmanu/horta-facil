import './_Navegacao.scss'
import PropTypes from 'prop-types';  // Corrigido para PropTypes

const Navegacao = ({ icone, iconeAlt }) => {
    return (
        <div className="container-Navegacao">
            <button>
                <img src={icone} alt={iconeAlt} />
            </button>
        </div>
    );
}

Navegacao.propTypes = {
    icone: PropTypes.string.isRequired,      // Validação do tipo das props
    iconeAlt: PropTypes.string.isRequired    // Nome adequado para o atributo "alt"
};

export default Navegacao;
