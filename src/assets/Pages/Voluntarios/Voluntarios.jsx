import { useEffect, useState } from 'react';
import BotaoRegistrar from '../../Components/BotaoRegistrar/BotaoRegistrar';
import FormRegistrarVoluntario from '../../Components/FormRegistrarVoluntario/FormRegistrarVoluntario';
import SideBar from '../../Components/SideBar/SideBar';
import SideBarMobile from '../../Components/SideBarMobile/SideBarMobile';
import './_Voluntarios.scss';
import CardVoluntario from '../../Components/CardVoluntario/CardVoluntario';
import axios from 'axios';

const Voluntarios = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [voluntarios, setVoluntarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleToggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    const closeForm = () => {
        setIsFormVisible(false);
    };

    const handleDeleteVoluntario = async (id) => {
        try {
            await axios.delete(`https://localhost:7193/api/Voluntarios/${id}`);
            // Atualiza a lista de voluntários após a exclusão
            setVoluntarios((prevVoluntarios) => prevVoluntarios.filter(voluntario => voluntario.id !== id));
        } catch (error) {
            console.error('Erro ao excluir voluntário:', error);
            setError('Não foi possível excluir o voluntário.'); // Mensagem de erro
        }
    };

    useEffect(() => {
        const fetchVoluntarios = async () => {
            try {
                const response = await axios.get('https://localhost:7193/api/Voluntarios');
                // Verifica se a resposta tem a estrutura esperada
                if (response.data && response.data.$values) {
                    setVoluntarios(response.data.$values);
                    

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

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container-Voluntarios">
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

                <div className="voluntarios">
                    {voluntarios.map((voluntario) => (
                        <CardVoluntario key={voluntario.id} nome={voluntario.nome} id ={voluntario.id} onDelete={handleDeleteVoluntario} />
                    ))}
                    <div className={`overlay ${isFormVisible ? 'visible' : ''}`}>
                        <FormRegistrarVoluntario onClose={closeForm} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Voluntarios;
