import PropTypes from 'prop-types';
import './_ModeloTarefa.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ModeloTarefa = ({ status, nome, data, voluntario }) => {
    const [nomeVoluntario, setNomeVoluntario] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchVoluntario = async () => {
            if (voluntario) { // Verifica se voluntario está definido
                try {
                    const response = await axios.get(`https://localhost:7193/api/Voluntarios/${voluntario}`);
                    setNomeVoluntario(response.data.nome); // Assume que o nome do voluntário está na propriedade 'nome' da resposta
                } catch (err) {
                    setError('Erro ao buscar voluntário');
                } finally {
                    setLoading(false); // Indica que a requisição terminou
                }
            } else {
                setLoading(false); // Se não houver voluntário, termina o loading
            }
        };

        fetchVoluntario();
    }, [voluntario]); // Chama novamente se 'voluntario' mudar

    if (loading) {
        return <div>Carregando...</div>; // Exibe mensagem enquanto carrega
    }

    if (error) {
        return <div>{error}</div>; // Exibe erro se ocorrer
    }

    return (
        <div className="container-molde-tarefa">
            <div className="info">
                <div className="info__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none">
                        <path fill="#393a37" d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"></path>
                    </svg>
                </div>
                <div className="textos">
                    <div className="info__title">{status}</div>
                    <div className="info__title">{nome}</div>
                    <div className="info__title">{data}</div>
                    <div className="info__title voluntario">{nomeVoluntario || ""}</div>
                </div>
            </div>
        </div>
    );
}

// Definindo os tipos das props
ModeloTarefa.propTypes = {
    status: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    nome: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    voluntario: PropTypes.string,
};

// Definindo valores padrão para as props
ModeloTarefa.defaultProps = {
    voluntario: null, // ou outra string padrão se preferir
};

export default ModeloTarefa;
