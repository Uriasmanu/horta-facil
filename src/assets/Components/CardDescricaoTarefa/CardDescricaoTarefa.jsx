import './_CardDescricaoTarefa.scss'

import confirma from  '../../../image/selecionado.png'
import avatar from  '../../../image/avatar2.png'
import mais from  '../../../image/mais.png'


const CardDescricaoTarefa = () => {
    return (
        <div className="CardDescricaoTarefa">
            <div className="card">
                <div className="text">
                    <span>Nome da tarefat</span>
                    <p className="subtitle">Descrição da tarefa
                    Verificação do Resultado: Agora, o código apenas verifica se o resultado não é nulo. Você pode ajustar a lógica da condição conforme necessário para definir o que significa sucesso
                    </p>
                </div>
                <div className="icons">
                    <button><img src={confirma} alt="" /></button>
                    <button><img src={avatar} alt="" /></button>
                    <button><img src={mais} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default CardDescricaoTarefa;