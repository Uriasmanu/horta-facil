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
        </div>
    )
}

export default Voluntarios;