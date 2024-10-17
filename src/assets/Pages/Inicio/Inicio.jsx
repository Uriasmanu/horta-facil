import BotaoRegistrar from '../../Components/BotaoRegistrar/BotaoRegistrar';
import CardPantas from '../../Components/CardPantas/CardPantas';
import SideBar from '../../Components/SideBar/SideBar';
import SideBarMobile from '../../Components/SideBarMobile/SideBarMobile';
import Tarefas from '../../Components/Tarefas/Tarefas';

import './_Inicio.scss';
import './_InicioMobile.scss';
import { useColeta } from '../../Context/DropDragContext';
import FormRegistrar from '../../Components/FormRegistrar/FormRegistrar';
import { useState } from 'react';
import axios from 'axios';
import BotaoColheita from '../../Components/BotaoColheita/BotaoColheita';



const Inicio = () => {
    const { items, colhidos, isLoading, errorMessage, onDragStart, onDrop, onDragOver, idColhido } = useColeta();

    const [isFormVisible, setIsFormVisible] = useState(false);


    const handleToggleForm = () => {
        setIsFormVisible(!isFormVisible)
    }

    const closeForm = () => {
        setIsFormVisible(false)
    }


    // Realizar a chamada DELETE para remover a planta da API
    const handleColheita = async () => {
        if (!idColhido) { // Corrigido aqui para usar idColhido
            console.error("Nenhuma planta foi selecionada.");
            return;
        }

        try {
            await axios.delete(`https://localhost:7193/api/Planta/plantas/${idColhido}`);
            console.log(`Planta ${idColhido} coletada e removida com sucesso.`);
            window.location.reload();
        } catch (error) {
            console.error(`Erro ao remover planta ${idColhido}:`, error);
        }
    };

    return (
        <div className="container-Inicio">


            <div className="registrar">
                <BotaoRegistrar onClick={handleToggleForm} />
            </div>
            <div className="secao agenda">
                <div className='div-secao-agenda'>
                    <h2>Agenda de Tarefas</h2>

                    <div className="colecao-tarefas">
                        <Tarefas />

                    </div>
                </div>

                <div
                    className="coletar"
                    onDrop={(e) => onDrop(e, 'colhidos')}
                    onDragOver={onDragOver}
                >
                    {isLoading ? (
                        <div className="loading">Carregando...</div>
                    ) : (
                        colhidos.map((planta, index) => (
                            <div key={planta.id}>
                                <CardPantas
                                    data={planta}
                                    index={index}
                                    onDragStart={(event) => onDragStart(event, planta)}

                                />

                            </div>
                        ))
                    )}

                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>

                <BotaoColheita onClick={handleColheita} />

            </div>
            <div className="secao plantas">
                <h2>Plantas cadastradas</h2>
                <div
                    className="colecao-cards"
                    onDrop={(e) => onDrop(e, 'items')}
                    onDragOver={onDragOver}
                > {isLoading ? (
                    <div className="loading">Carregando...</div>
                ) : (
                    items.map((planta, index) => (
                        <CardPantas
                            key={planta.id}
                            data={planta}
                            index={index}
                            onDragStart={(event) => onDragStart(event, planta)}

                        />
                    ))
                )}
                </div>

            </div>
            <div className={`overlay ${isFormVisible ? 'visible' : ''}`}>
                <FormRegistrar onClose={closeForm} />
            </div>
            <div className="contain-sidebarMobile">
                <SideBarMobile />
            </div>
            <div className="contain-sidebar">
                <SideBar />
            </div>
        </div>
    );
}

export default Inicio;
