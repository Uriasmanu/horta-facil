import './_FormRegistrarVoluntario.scss';
import fecharJanelaImg from '../../../image/fecharJanela.png';
import useRegistrarPlanta from '../../Hooks/useRegistrarPlanta';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';

const FormRegistrarVoluntario = ({ onClose }) => {

    const { formData, handleInputChange, isFormValid, handleSubmit, isSubmitting, errorMessage } = useRegistrarPlanta();

    return (
        <div className="container-FormRegistrarVoluntario">
            {isSubmitting || <Loader />} {/* Exibe o Loader enquanto está enviando o formulário */}

            <form className="form" onSubmit={handleSubmit}>
                <button className='buttonFechar' type="button">
                    <img src={fecharJanelaImg} alt="Fechar Janela" onClick={onClose} />
                </button>

                <div className="title">
                    Registrar
                    <br />
                    <span>Voluntario</span>
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
FormRegistrarVoluntario.propTypes = {
    onClose: PropTypes.func.isRequired, // onClose precisa ser uma função e é obrigatório
};

export default FormRegistrarVoluntario;
