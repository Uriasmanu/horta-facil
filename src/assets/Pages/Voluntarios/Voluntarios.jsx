import { useState } from 'react';
import BotaoRegistrar from '../../Components/BotaoRegistrar/BotaoRegistrar';
import FormRegistrarVoluntario from '../../Components/FormRegistrarVoluntario/FormRegistrarVoluntario';



import SideBar from '../../Components/SideBar/SideBar';
import SideBarMobile from '../../Components/SideBarMobile/SideBarMobile';
import './_Voluntarios.scss'

const Voluntarios = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleToggleForm = () => {
        setIsFormVisible(!isFormVisible);

    }

    const closeForm = () => {
        setIsFormVisible(false)
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

                    <div className={`overlay ${isFormVisible ? 'visible' : ''}`}>
                        <FormRegistrarVoluntario onClose={closeForm}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Voluntarios;