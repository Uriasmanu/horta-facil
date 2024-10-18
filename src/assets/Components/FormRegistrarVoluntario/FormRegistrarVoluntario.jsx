import './_FormRegistrarVoluntario.scss';
import fecharJanelaImg from '../../../image/fecharJanela.png';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import useRegistrarVoluntarios from '../../Hooks/useRegistrarVoluntarios';

const FormRegistrarVoluntario = ({ onClose }) => {
    const {
        formData,
        isSubmitting,
        errorMessage,
        handleInputChange,
        handleSubmit,
        isFormValid,
    } = useRegistrarVoluntarios();

    return (
        <div className="container-FormRegistrarVoluntario">
            {isSubmitting && <Loader />} {/* Correção do Loader */}

            <form className="form" onSubmit={handleSubmit}>
                <button className='buttonFechar' type="button" onClick={onClose}>
                    <img src={fecharJanelaImg} alt="Fechar Janela" />
                </button>

                <div className="title">
                    Registrar
                    <br />
                    <span>Voluntário</span>
                </div>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <input
                    type="text"
                    placeholder="Nome"
                    name="nome" // Certifique-se de que o nome corresponda ao do estado
                    className="nome"
                    value={formData.nome} // Acessa o valor correto
                    onChange={handleInputChange}
                />
                <button
                    className="button-confirm"
                    type="submit"
                    disabled={!isFormValid() || isSubmitting}
                >
                    {isSubmitting ? 'Registrando...' : 'Registrar →'}
                </button>
            </form>
        </div>
    );
};

// Definindo os prop types
FormRegistrarVoluntario.propTypes = {
    onClose: PropTypes.func.isRequired, // onClose precisa ser uma função e é obrigatório
};

export default FormRegistrarVoluntario;
