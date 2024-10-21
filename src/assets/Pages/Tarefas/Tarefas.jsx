
import { useState } from 'react';
import BotaoRegistrar from '../../Components/BotaoRegistrar/BotaoRegistrar';
import SideBar from '../../Components/SideBar/SideBar';
import SideBarMobile from '../../Components/SideBarMobile/SideBarMobile';
import './_Tarefas.scss'
import FormRegistrarTarefa from '../../Components/FormRegistrarTarefa/FormRegistrarTarefa';
import ModeloTarefa from '../../Components/ModeloTarefa/ModeloTarefa';
import CardDescricaoTarefa from '../../Components/CardDescricaoTarefa/CardDescricaoTarefa';

const Tarefas = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);


    const handleToggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    const closeForm = () => {
        setIsFormVisible(false);
    };

    return (
        <div className="container-Tarefas">
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
                
                <CardDescricaoTarefa />

                <div className="contain-tarefas">
                    <h2>Agenda de Tarefas</h2>

                    <div className='listar-tarefas'>
                        <ModeloTarefa />
                        <ModeloTarefa />
                        <ModeloTarefa />
                        <ModeloTarefa />
                        <ModeloTarefa />
                        <ModeloTarefa />
                        <ModeloTarefa />
                        <ModeloTarefa />
                        <ModeloTarefa />
                        <ModeloTarefa />
                        <ModeloTarefa />
                        <ModeloTarefa />
                        <ModeloTarefa />
                        <ModeloTarefa />
                        <ModeloTarefa />
                        <ModeloTarefa />
                    </div>
                </div>


                <div className={`overlay ${isFormVisible ? 'visible' : ''}`}>
                    <FormRegistrarTarefa onClose={closeForm} />
                </div>
            </div>
        </div>

    )
}

export default Tarefas;