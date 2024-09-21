import Navegacao from '../Navegacao/Navegacao';
import './_SideBar.scss'
import planta from '../../../image/planta.svg'
import voluntario from '../../../image/voluntarios.svg'
import tarefas from '../../../image/tarefas.svg'
import estoque from '../../../image/estoque.svg'

const SideBar = () => {
    return (
        <div className="container-SideBar">
            <div className="container-navega">
                <Navegacao icone={planta} iconeAlt="Planta" rota='inicio' />
                <Navegacao icone={voluntario} iconeAlt="Voluntário" rota='voluntario' />
                <Navegacao icone={tarefas} iconeAlt="Tarefas" rota='tarefas' />
                <Navegacao icone={estoque} iconeAlt="Estoque" rota='recurso' />
            </div>
        </div>
    )
}

export default SideBar;