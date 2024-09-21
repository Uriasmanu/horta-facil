import Navegacao from '../../Components/Navegacao/Navegacao';
import './_Inicio.scss'

import planta from '../../../image/planta.svg'
import voluntario from '../../../image/voluntarios.svg'
import tarefas from '../../../image/tarefas.svg'
import estoque from '../../../image/estoque.svg'


const Inicio = () =>{
    return(
        <div className="container-Inicio">
            <div className="container-navega">
            <Navegacao icone={planta} iconeAlt="Planta"/>
                <Navegacao icone={voluntario} iconeAlt="Voluntário"/>
                <Navegacao icone={tarefas} iconeAlt="Tarefas"/>
                <Navegacao icone={estoque} iconeAlt="Estoque"/>
            </div>
        </div>
    )
}

export default Inicio;