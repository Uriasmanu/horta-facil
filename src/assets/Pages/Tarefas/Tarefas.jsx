import { useEffect, useState } from 'react';
import BotaoRegistrar from '../../Components/BotaoRegistrar/BotaoRegistrar';
import SideBar from '../../Components/SideBar/SideBar';
import SideBarMobile from '../../Components/SideBarMobile/SideBarMobile';
import './_Tarefas.scss'
import './_TarefasMobile.scss'
import FormRegistrarTarefa from '../../Components/FormRegistrarTarefa/FormRegistrarTarefa';
import ModeloTarefa from '../../Components/ModeloTarefa/ModeloTarefa';
import CardDescricaoTarefa from '../../Components/CardDescricaoTarefa/CardDescricaoTarefa';
import axios from 'axios';

const Tarefas = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [tarefas, setTarefas] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [detalhesTarefa, setDetalhesTarefa] = useState(null);
    const [isDescricaoVisible, setIsDescricaoVisible] = useState(false);

    const handleDeleteTarefa = async (id) => {
        try {
            await axios.delete(`https://localhost:7193/api/Tarefas/${id}`);
            console.log(`Tarefa com ID ${id} deletada com sucesso.`);
            setTarefas((prevTarefas) => prevTarefas.filter((tarefa) => tarefa.id !== id));
            window.location.reload();
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
            setError('Erro ao deletar a tarefa.');
        }
    }

    const handleAtualizaStatus = async (id) => {
        try {
            // Envie apenas o número diretamente, sem um objeto, e configure o cabeçalho
            await axios.patch(`https://localhost:7193/api/Tarefas/${id}/status`, 1, {
                headers: {
                    'Content-Type': 'application/json' // Adiciona o cabeçalho Content-Type
                }
            });
            
            setTarefas(prevTarefas =>
                prevTarefas.map(tarefa =>
                    tarefa.id === id ? { ...tarefa, status: 1 } : tarefa
                )
            );
            
            console.log(`Status da tarefa com ID ${id} atualizado para 1.`);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao atualizar status da tarefa:', error.response?.data || error.message); // Logar resposta de erro
            setError('Erro ao atualizar o status da tarefa.');
        }
    };
    

    const handleToggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    const closeForm = () => {
        setIsFormVisible(false);
    };

    const handleClickTarefa = (tarefa) => {
        setDetalhesTarefa(tarefa); // Armazena a tarefa clicada
        if (detalhesTarefa && detalhesTarefa.id !== tarefa.id) {
            return;
        } else {
            setIsDescricaoVisible(prevState => !prevState); // Alterna a visibilidade
        }
    };

    useEffect(() => {
        const fetchTarefas = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://localhost:7193/api/Tarefas');

                if (response.data && response.data.$values) {
                    setTarefas(response.data.$values);
                } else {
                    setError('Formato de dados inesperado.');
                }
            } catch (error) {
                console.error('Erro ao buscar tarefas:', error);
                setError('Não foi possível carregar as tarefas.');
            } finally {
                setLoading(false);
            }
        };

        fetchTarefas();
    }, []);

    return (
        <div className="container-Tarefas">
            <div className="contain-sidebar">
                <SideBar />
            </div>
            <div className="contain-sidebarMobile">
                <SideBarMobile />
            </div>
            <div className="main">
                <div className="BotaoRegistrar">
                    <BotaoRegistrar onClick={handleToggleForm} />
                </div>
                <div className={`descricaoTarefa ${isDescricaoVisible ? 'visible' : ''}`}>
                    <CardDescricaoTarefa
                        nomeTarefa={detalhesTarefa ? detalhesTarefa.nome : 'Nome da Tarefa'}
                        descricao={detalhesTarefa ? detalhesTarefa.descricao : 'Descricao'}
                        onDelete={() => detalhesTarefa && handleDeleteTarefa(detalhesTarefa.id)}
                        onClick={() => detalhesTarefa && handleAtualizaStatus(detalhesTarefa.id)}
                    />
                </div>
                <div className="contain-tarefas">
                    <h2>Agenda de Tarefas</h2>

                    {loading && <p>Carregando tarefas...</p>}
                    {error && <p>{error}</p>}

                    {!loading && !error && (
                        <div className='listar-tarefas'>
                            {tarefas.length > 0 ? (
                                tarefas.map((tarefa) => (
                                    <ModeloTarefa
                                        key={tarefa.id}
                                        nome={tarefa.nome}
                                        descricao={tarefa.descricao} // Se você não está usando aqui, pode não ser necessário
                                        data={tarefa.dataCriacao} // Usando dataCriacao da resposta
                                        status={tarefa.status} // Adicionando status
                                        voluntario={tarefa.idVoluntario} // Adicionando voluntario
                                        onDelete={() => handleDeleteTarefa(tarefa.id)}
                                        onClick={() => handleClickTarefa(tarefa)}
                                    />
                                ))
                            ) : (
                                <p>Nenhuma tarefa encontrada.</p>
                            )}
                        </div>
                    )}
                </div>

                <div className={`overlay ${isFormVisible ? 'visible' : ''}`}>
                    <FormRegistrarTarefa onClose={closeForm} />
                </div>
            </div>
        </div>
    );
};

export default Tarefas;
