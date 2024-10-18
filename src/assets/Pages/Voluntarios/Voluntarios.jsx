import BotaoRegistrar from '../../Components/BotaoRegistrar/BotaoRegistrar';
import CardVoluntario from '../../Components/CardVoluntario/CardVoluntario';


import SideBar from '../../Components/SideBar/SideBar';
import SideBarMobile from '../../Components/SideBarMobile/SideBarMobile';
import './_Voluntarios.scss'

const Voluntarios = () => {
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
                    <BotaoRegistrar />
                </div>

                <div className="voluntarios">
                  
                </div>
            </div>
        </div>
    )
}

export default Voluntarios;