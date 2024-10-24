import { useEffect, useState } from 'react';
import BotaoRegistrar from '../../Components/BotaoRegistrar/BotaoRegistrar';
import SideBar from '../../Components/SideBar/SideBar';
import SideBarMobile from '../../Components/SideBarMobile/SideBarMobile';
import './_Recursos.scss';
import './_RecursosMobile.scss';

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
                if (response.data && response.data.$values) {
                    console.log('Dados dos recursos:', response.data.$values); // Verifique os dados aqui
                    setRecursos(response.data.$values);
                } else {
                    setError('Formato de dados inesperado.');
                }
            } catch (error) {
                console.error('Erro ao buscar recursos:', error);
                setError('Não foi possível carregar os recursos.');
            } finally {
                setLoading(false);
            }
        };

        fetchRecursos();
    }, []);


    const formatDate = (dateString) => {
        const date = new Date(dateString);

        // Verifique se a data é válida
        if (isNaN(date.getTime())) {
            console.error('Data inválida:', dateString);
            return 'Data inválida'; // Retorna uma string padrão para datas inválidas
        }

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);

        return `${day}/${month}/${year}`;
    };

    const handleDeleteRecursos = async (id) => {

        if (!id) {
            setError('ID inválido.');
            return;
        }
        try {
            await axios.delete(`https://localhost:7193/api/Recursos/${id}`);
            setRecursos((prevRecursos) => prevRecursos.filter(recurso => recurso.id !== id));
        } catch (error) {
            console.error('Erro ao excluir recursos:', error);
            setError('Não foi possível excluir os recursos.');
        }
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
                    {recursos.map((recurso) => {
                        console.log('ID no map:', recurso.id); // Verifique os IDs retornados no map
                        return (
                            <CardRecurso
                                key={recurso.id}
                                tipoRecurso={recurso.tipoRecurso}
                                nome={recurso.nome}
                                dataCriacao={formatDate(recurso.dataCriacao)}
                                onDelete={() => handleDeleteRecursos(recurso.id)} // Certifique-se de que o ID correto está sendo passado
                            />
                        );
                    })}

                </div>
                <div className={`overlay ${isFormVisible ? 'visible' : ''}`}>
                    <FormRegistrarRecursos onClose={closeForm} />
                </div>
            </div>
        </div>
    );
};

export default Recursos;
