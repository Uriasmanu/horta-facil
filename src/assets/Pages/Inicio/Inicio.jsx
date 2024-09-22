
import BotaoRegistrar from '../../Components/BotaoRegistrar/BotaoRegistrar';
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
            <div className="plantas">
                <h2>Plantas cadastradas</h2>
            </div>
            <div className="agenda">
                <div>
                    <h2>Plantas cadastradas</h2>
                </div>
                <h2>Colheita</h2>
            </div>
            <BotaoRegistrar/>
        </div>
    )
}

export default Inicio;