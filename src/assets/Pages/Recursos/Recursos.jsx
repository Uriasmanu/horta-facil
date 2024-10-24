import { useEffect, useState } from 'react';
import BotaoRegistrar from '../../Components/BotaoRegistrar/BotaoRegistrar';
import SideBar from '../../Components/SideBar/SideBar';
import SideBarMobile from '../../Components/SideBarMobile/SideBarMobile';
import './_Recursos.scss';
import FormRegistrarRecursos from '../../Components/FormRegistrarRecursos/FormRegistrarRecursos';
import CardRecurso from '../../Components/CardRecurso/CardRecurso';
import axios from 'axios';

const Recursos = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [recursos, setRecursos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Começa como true para mostrar o carregamento

    const handleToggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    const closeForm = () => {
        setIsFormVisible(false);
    };

    useEffect(() => {
        const fetchRecursos = async () => {
            try {
                const response = await axios.get('https://localhost:7193/api/Recursos');
                // Verifica se a resposta tem a estrutura esperada
                if (response.data && response.data.$values) {
                    setRecursos(response.data.$values);
                } else {
                    setError('Formato de dados inesperado.'); // Mensagem de erro se a estrutura não estiver correta
                }
            } catch (error) {
                console.error('Erro ao buscar recursos:', error);
                setError('Não foi possível carregar os recursos.'); // Mensagem de erro
            } finally {
                setLoading(false);
            }
        };

        fetchRecursos();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString); // Cria um objeto Date a partir da string da data
        const day = String(date.getDate()).padStart(2, '0'); // Obtém o dia e adiciona zero à esquerda se necessário
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Obtém o mês (0-11), então adiciona 1 e zero à esquerda
        const year = String(date.getFullYear()).slice(-2); // Obtém os últimos dois dígitos do ano
    
        return `${day}/${month}/${year}`; // Retorna a data no formato desejado
    };
    

    return (
        <div className="container-Recursos">
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
                <div className="recursos">
                    {loading && <p>Carregando recursos...</p>}
                    {error && <p>{error}</p>}
                    {recursos.map((recurso) => (
                        <CardRecurso
                            key={recurso.id} // Supondo que 'id' é um identificador único
                            tipoRecurso={recurso.tipoRecurso} // Ajuste os nomes das propriedades conforme sua estrutura
                            nome={recurso.nome} // Ajuste os nomes das propriedades conforme sua estrutura
                            dataCriacao={formatDate(recurso.dataCriacao)}
                        />
                    ))}
                </div>
                <div className={`overlay ${isFormVisible ? 'visible' : ''}`}>
                    <FormRegistrarRecursos onClose={closeForm} />
                </div>
            </div>
        </div>
    );
};

export default Recursos;
