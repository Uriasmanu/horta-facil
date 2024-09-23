import { useState } from 'react';
import BotaoRegistrar from '../../Components/BotaoRegistrar/BotaoRegistrar';
import CardPantas from '../../Components/CardPantas/CardPantas';
import SideBar from '../../Components/SideBar/SideBar';
import SideBarMobile from '../../Components/SideBarMobile/SideBarMobile';
import Tarefas from '../../Components/Tarefas/Tarefas';
import useDragDrop from '../../Hooks/useDragDrop';
import './_Inicio.scss'

const Inicio = () => {
    const [coletar, setColetar] = useState([]);
    const [plantas, setPlantas] = useState([{ nome: 'Planta 1' }, { nome: 'Planta 2' }]);

    const onDrop = (data) => {
        const parsedData = JSON.parse(data);
        setColetar(prevColheita => [...coletar, parsedData]);
        console.log('Dropped data:', parsedData);
    };

    const {
        isDragging,
        handleDragOver,
        handleDragLeave,
        handleDrop,
    } = useDragDrop(onDrop);

    return (
        <div className="container-Inicio">
            <div className="contain-sidebar">
                <SideBar />
            </div>
            <div className="contain-sidebarMobile">
                <SideBarMobile />
            </div>
            <div className="secao plantas">
                <h2>Plantas cadastradas</h2>
                <div
                    className="colecao-cards"
                >
                    <CardPantas data={{ nome: 'Planta 1' }} />
                    <CardPantas data={{ nome: 'Planta 2' }} />

                </div>
            </div>
            <div className="secao agenda">
                <div>
                    <h2>Agenda de Tarefas</h2>
                    <div className="colecao-tarefas">
                        <Tarefas />

                    </div>
                </div>
                <h2>Colheita</h2>
                <div
                    className="coletar"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    {isDragging ? 'Solte aqui!' : 'Arraste algo aqui'}
                    <ul>
                        {coletar.map((item, index) => (
                            <li key={index}>{item.nome}</li>
                        ))}
                    </ul>
                </div>

            </div>
            <div className="registrar">
                <BotaoRegistrar />
            </div>
        </div>
    )
}

export default Inicio;