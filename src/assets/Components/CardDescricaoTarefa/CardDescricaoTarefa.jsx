import './_CardDescricaoTarefa.scss'
import './_CardDescricaoTarefaMobile.scss'
import confirma from '../../../image/selecionado.png'
import avatar from '../../../image/avatar2.png'
import lixo from '../../../image/apagar.png'
import PropTypes from 'prop-types'


const CardDescricaoTarefa = ({ nomeTarefa, descricao, onDelete, onClick }) => {
    return (
        <div className="CardDescricaoTarefa">
            <div className="card-descri">
                <div className="text">
                    <span>{nomeTarefa}</span>
                    <p className="subtitle">{descricao}</p>
                </div>
                <div className="icons">
                    <button onClick={onClick}>
                        <img src={confirma} alt="Confirmar tarefa" />
                    </button>
                    <button>
                        <img src={avatar} alt="Avatar do usuário" />
                    </button>
                    <button onClick={onDelete}>
                        <img src={lixo} alt="Deletar tarefa" />
                    </button>
                </div>
            </div>
        </div>
    )
}

CardDescricaoTarefa.propTypes = {
    descricao: PropTypes.string,
    nomeTarefa: PropTypes.string,
    onDelete: PropTypes.func,
    onClick: PropTypes.func,
};

export default CardDescricaoTarefa;