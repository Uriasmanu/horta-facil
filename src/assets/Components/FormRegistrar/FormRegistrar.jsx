import './_FormRegistrar.scss';
import fecharJanelaImg from '../../../image/fecharJanela.png';
import useRegistrarPlanta from '../../Hooks/useRegistrarPlanta';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';

const FormRegistrar = ({onClose}) => {
  
    const { formData, handleInputChange, isFormValid, handleSubmit, isSubmitting, errorMessage } = useRegistrarPlanta();

    return (
        <div className="container-FormRegistrar">
            {isSubmitting || <Loader />} {/* Exibe o Loader enquanto está enviando o formulário */}

            <form className="form" onSubmit={handleSubmit}>
                <button className='buttonFechar' type="button">
                    <img src={fecharJanelaImg} alt="Fechar Janela" onClick={onClose}/>
                </button>

                <div className="title">
                    Registrar
                    <br />
                    <span>Plantas</span>
                </div>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <input
                type="text"
                placeholder="Nome"
                name="nomePlanta" // Certifique-se de que o nome corresponda ao do estado
                className="nome"
                value={formData.nomePlanta}
                onChange={handleInputChange}
            />

            <div className='dias'>
                <input
                    type="text"
                    placeholder="Dias para a colheita"
                    name="diasParaColheita" // Certifique-se de que o nome corresponda ao do estado
                    className="input"
                    value={formData.diasParaColheita}
                    onChange={handleInputChange}
                />
            </div>

                <button
                    className="button-confirm"
                    type="submit"
                    disabled={!isFormValid() || isSubmitting}
                >
                    {isSubmitting ? 'Registrando...' : 'Plantar →'}
                </button>
            </form>
        </div>
    );
};

// Definindo os prop types
FormRegistrar.propTypes = {
    onClose: PropTypes.func.isRequired, // onClose precisa ser uma função e é obrigatório
};

export default FormRegistrar;
