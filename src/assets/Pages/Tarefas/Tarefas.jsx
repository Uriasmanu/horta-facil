
import SideBar from '../../Components/SideBar/SideBar';
import SideBarMobile from '../../Components/SideBarMobile/SideBarMobile';
import './_Tarefas.scss'

const Tarefas = () => {
    return (
        <div className="container-Tarefas">
            <div className="contain-sidebar">
                <SideBar />
            </div>
            <div className="contain-sidebarMobile">
                <SideBarMobile />
            </div>
        </div>
    )
}

export default Tarefas;