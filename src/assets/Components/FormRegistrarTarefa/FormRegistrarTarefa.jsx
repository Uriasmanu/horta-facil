import './_FormRegistrarTarefa.scss';
import fecharJanelaImg from '../../../image/fecharJanela.png';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import useRegistrarTarefa from '../../Hooks/useRegistrarTarefa';
import { useEffect, useState } from 'react';
import axios from 'axios';


const FormRegistrarTarefa = ({ onClose }) => {
    const [voluntario, setVoluntario] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [FormDataTarefa, setFormDataTarefa] = useState({});

    const {
        formData,
        isSubmitting,
        errorMessage,
        handleInputChangeTarefa,
        handleSubmit,
        isFormValid,
    } = useRegistrarTarefa();

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        if (name === 'voluntario') {
            console.log(`ID do voluntário selecionado: ${value}`);  // Exibe o ID no console
        }
    
        setFormDataTarefa({
            ...formData,
            [name]: value,  // Atualiza o valor corretamente, seja para 'voluntario' ou outros campos
        });
    };
    

    useEffect(() => {
        const fetchVoluntarios = async () => {
            try {
                const response = await axios.get('https://localhost:7193/api/Voluntarios');
                // Verifica se a resposta tem a estrutura esperada
                if (response.data && response.data.$values) {
                    setVoluntario(response.data.$values);


                } else {
                    setError('Formato de dados inesperado.'); // Mensagem de erro se a estrutura não estiver correta
                }

            } catch (error) {
                console.error('Erro ao buscar voluntários:', error);
                setError('Não foi possível carregar os voluntários.'); // Mensagem de erro
            } finally {
                setLoading(false);
            }
        };

        fetchVoluntarios();
    }, []);

    return (
        <div className="container-FormRegistrarTarefa">
            {isSubmitting && <Loader />} {/* Correção do Loader */}

            <form className="form" onSubmit={handleSubmit}>
                <button className='buttonFechar' type="button" onClick={onClose}>
                    <img src={fecharJanelaImg} alt="Fechar Janela" />
                </button>

                <div className="title">
                    Registrar
                    <br />
                    <span>Tarefa</span>
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
                <input
                    type="text"
                    placeholder="Descricao"
                    name="descricao" // Certifique-se de que o descricao corresponda ao do estado
                    className="nome"
                    value={formData.descricao} // Acessa o valor correto
                    onChange={handleInputChange}
                />

                <label htmlFor="voluntario">Escolha um voluntário</label>
                <select id="voluntario" name="voluntario" value={formData.voluntario} onChange={handleInputChange}>
                    <option value="">Nenhum</option> {/* Opção vazia */}
                    {voluntario.map((voluntario) => (
                        <option key={voluntario.id} value={voluntario.id}>
                            {voluntario.nome}
                        </option>
                    ))}
                </select>



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
FormRegistrarTarefa.propTypes = {
    onClose: PropTypes.func.isRequired, // onClose precisa ser uma função e é obrigatório
};

export default FormRegistrarTarefa;
