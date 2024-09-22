
import BotaoRegistrar from '../../Components/BotaoRegistrar/BotaoRegistrar';
import CardPantas from '../../Components/CardPantas/CardPantas';
import SideBar from '../../Components/SideBar/SideBar';
import SideBarMobile from '../../Components/SideBarMobile/SideBarMobile';
import './_Inicio.scss'

const Inicio = () => {
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
                <div className="colecao-cards">
                    <CardPantas />
                    
                </div>
            </div>
            <div className="secao agenda">
                <div>
                    <h2>Agenda de Tarefas</h2>
                </div>
                <h2>Colheita</h2>
            </div>
            <div className="registrar">
                <BotaoRegistrar />
            </div>
        </div>
    )
}

export default Inicio;