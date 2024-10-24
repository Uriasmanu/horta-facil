
import { useState } from 'react';
import BotaoRegistrar from '../../Components/BotaoRegistrar/BotaoRegistrar';
import SideBar from '../../Components/SideBar/SideBar';
import SideBarMobile from '../../Components/SideBarMobile/SideBarMobile';
import './_Recursos.scss'
import FormRegistrarRecursos from '../../Components/FormRegistrarRecursos/FormRegistrarRecursos';

const Recursos = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);


    const handleToggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    const closeForm = () => {
        setIsFormVisible(false);
    };

    return (
        <div className="container-Recursos">
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
                <div className="recursos">
                </div>
                <div className={`overlay ${isFormVisible ? 'visible' : ''}`}>
                    <FormRegistrarRecursos onClose={closeForm} />
                </div>
            </div>
        </div>
    )
}

export default Recursos;