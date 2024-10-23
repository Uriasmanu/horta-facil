import PropTypes from 'prop-types';
import './_ModeloTarefa.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

import apagar from '../../../image/apagar.png'

const ModeloTarefa = ({ status, nome, data, voluntario, onDelete, onClick }) => {
    const [nomeVoluntario, setNomeVoluntario] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Função para converter status numérico em texto
    const getStatusText = (value) => {
        if (value < 0 || value > 2) {
            throw new Error("Status deve ser 0 (Pendente), 1 (Em Progresso) ou 2 (Finalizado).");
        }
        switch (value) {
            case 0:
                return 'Pendente';
                
            case 1:
                return 'Progresso';
            case 2:
                return 'Finalizado';
            default:
                return ''; // Isso nunca deve ocorrer devido à verificação anterior
        }
    };

   

    useEffect(() => {
        const fetchVoluntario = async () => {

            if (voluntario) { // Verifica se voluntario está definido
                try {
                    const response = await axios.get(`https://localhost:7193/api/Voluntarios/${voluntario}`);

                    setNomeVoluntario(response.data); // Assume que o nome do voluntário está na propriedade 'nome' da resposta
                } catch (err) {
                    console.error('Error fetching volunteer:', err); // Log do erro
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

    const formatarData = (dataISO) => {
        const dataObj = new Date(dataISO);
        return `${String(dataObj.getDate()).padStart(2, '0')}/${String(dataObj.getMonth() + 1).padStart(2, '0')}`;
    };

    if (loading) {
        return <div>Carregando...</div>; // Exibe mensagem enquanto carrega
    }

    if (error) {
        return <div>{error}</div>; // Exibe erro se ocorrer
    }

    return (
        <div className="container-molde-tarefa" onClick={onClick}>
            <div className={`info ${getStatusText(status)}`}>
                <div className="info__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none">
                        <path fill="#393a37" d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"></path>
                    </svg>
                </div>
                <div className="textos">
                <div className="info__title">{getStatusText(status)}</div> 
                    <div className="info__title">{nome}</div>
                    <div className="info__title">{formatarData(data)}</div>
                    <div className="info__title voluntario">{nomeVoluntario || ""}</div>
                </div>

                <button className='apagar' onClick={onDelete}>
                    <img src={apagar} alt="icone de apagar" />
                </button>
                
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
    onDelete: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ModeloTarefa
