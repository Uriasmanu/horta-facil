import PropTypes from 'prop-types';
import './_BotaoRegistrar.scss'

const BotaoRegistrar = ({ onClick }) => {

    return (
        <button onClick={onClick} className="container-BotaoRegistrar">
            REGISTRAR
        </button>
    )
}

BotaoRegistrar.propTypes = {
    onClick: PropTypes.func.isRequired, // Valida que onClick é uma função e é obrigatório
}

export default BotaoRegistrar;