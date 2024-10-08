import PropTypes from 'prop-types'; 
import './_BotaoRegistrar.scss'

const BotaoRegistrar = ({onClick}) => {

    return (
        <div className="container-BotaoRegistrar">

            <button onClick={onClick}>

                REGISTRAR
            </button>
        </div>
    )
}

BotaoRegistrar.propTypes = {
    onClick: PropTypes.func.isRequired, // Valida que onClick é uma função e é obrigatório
}

export default BotaoRegistrar;