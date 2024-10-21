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

    const {
        formData,
        setFormData,
        isSubmitting,
        errorMessage,
        handleInputChangeTarefa,
        handleSubmit,
        isFormValid,
    } = useRegistrarTarefa();

    useEffect(() => {
        const fetchVoluntarios = async () => {
            try {
                const response = await axios.get('https://localhost:7193/api/Voluntarios');
                if (response.data && response.data.$values) {
                    setVoluntario(response.data.$values);
                } else {
                    setError('Formato de dados inesperado.');
                }
            } catch (error) {
                console.error('Erro ao buscar voluntários:', error);
                setError('Não foi possível carregar os voluntários.');
            } finally {
                setLoading(false);
            }
        };

        fetchVoluntarios();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleInputChangeTarefa(e); // Atualiza o estado no hook
    
        if (name === 'idVoluntario') {
            // Se a opção "Nenhum" for escolhida, define como null
            const selectedValue = value === '' ? null : value;
            setFormData((prev) => ({ ...prev, idVoluntario: selectedValue }));

        }
    };

    return (
        <div className="container-FormRegistrarTarefa">
            {isSubmitting && <Loader />}

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
                    name="nome"
                    className="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                />
                <textarea
                    
                    placeholder="Descricao"
                    name="descricao"
                    className="nome"
                    value={formData.descricao}
                    onChange={handleInputChange}
                />

                <label htmlFor="voluntario">Escolha um voluntário</label>
                <select id="voluntario" name="idVoluntario" value={formData.idVoluntario} onChange={handleInputChange}>
                    <option value="">Nenhum</option>
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
    onClose: PropTypes.func.isRequired,
};

export default FormRegistrarTarefa;
