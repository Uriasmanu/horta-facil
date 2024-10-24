import './_FormRegistrarRecursos.scss';
import fecharJanelaImg from '../../../image/fecharJanela.png';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import useRegistrarRecursos from '../../Hooks/useRegistrarRecursos';

const FormRegistrarRecursos = ({ onClose }) => {
    const {
        formData,
        handleInputChangeRecursos,
        handleSubmit,
        isFormValid,
        isSubmitting,
        errorMessage,
    } = useRegistrarRecursos();

    const handleInputChange = (e) => {
        handleInputChangeRecursos(e); // Chama a função do hook
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        await handleSubmit(e); // Chama a função de submit do hook
    };

    return (
        <div className="container-FormRegistrarRecursos">
            {isSubmitting && <Loader />} {/* Exibe o loader quando está enviando */}

            <form className="form" onSubmit={handleSubmitForm}>
                <button className='buttonFechar' type="button" onClick={onClose}>
                    <img src={fecharJanelaImg} alt="Fechar Janela" />
                </button>

                <div className="title">
                    Registrar
                    <br />
                    <span>Recursos</span>
                </div>

                {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Exibe a mensagem de erro do hook */}

                <input
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    className="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Tipo"
                    name="tipoRecurso" // Corrigido para 'tipoRecurso'
                    className="nome" // Nome da classe pode ser diferente
                    value={formData.tipoRecurso}
                    onChange={handleInputChange}
                />

                <button
                    className="button-confirm"
                    type="submit"
                    disabled={!isFormValid() || isSubmitting} // Desabilita o botão se o formulário não for válido ou estiver enviando
                >
                    {isSubmitting ? 'Registrando...' : 'Registrar →'}
                </button>
            </form>
        </div>
    );
};

// Definindo os prop types
FormRegistrarRecursos.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default FormRegistrarRecursos;
