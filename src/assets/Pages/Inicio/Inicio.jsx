import BotaoRegistrar from '../../Components/BotaoRegistrar/BotaoRegistrar';
import CardPantas from '../../Components/CardPantas/CardPantas';
import SideBar from '../../Components/SideBar/SideBar';
import SideBarMobile from '../../Components/SideBarMobile/SideBarMobile';
import Tarefas from '../../Components/Tarefas/Tarefas';

import './_Inicio.scss';
import './_InicioMobile.scss';
import { useColeta } from '../../Context/DropDragContext';

const Inicio = () => {
    const { items, colhidos, onDragStart, onDrop, onDragOver } = useColeta();

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
                    onDrop={(e) => onDrop(e, 'items')}
                    onDragOver={onDragOver}
                >
                    {items.map((planta, index) => (
                        <CardPantas
                            key={planta.id} // Use um identificador único
                            data={planta}
                            index={index}
                            onDragStart={(event) => onDragStart(event, planta)}
                        />
                    ))}
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
                    onDrop={(e) => onDrop(e, 'colhidos')}
                    onDragOver={onDragOver}
                >
                    {colhidos.map((planta, index) => (
                        <CardPantas
                            key={planta.id} // Use um identificador único
                            data={planta}
                            index={index}
                            onDragStart={(event) => onDragStart(event, planta)}
                        />
                    ))}
                </div>
            </div>
            <div className="registrar">
                <BotaoRegistrar />
            </div>
        </div>
    );
}

export default Inicio;
