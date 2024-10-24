import './_CardRecurso.scss';
import PropTypes from 'prop-types'; // Importa PropTypes para verificação de tipos
import apagar from '../../../image/apagar.png';

const CardRecurso = ({ nome, tipoRecurso, dataCriacao, onDelete }) => {
    return (
        <div className="cardRecurso">
            <div className="notification">
                <div className="notiglow"></div>
                <div className="notiborderglow"></div>
                <div className="notititle">
                    {tipoRecurso}
                    <button><img src={apagar} alt={`Apagar ${nome}`} onClick={onDelete}/></button>
                </div>
                <div className="notibody">{nome}</div>
                <p className="data">{dataCriacao}</p>
            </div>
        </div>
    );
};

CardRecurso.propTypes = {
    nome: PropTypes.string.isRequired,
    tipoRecurso: PropTypes.string.isRequired,
    dataCriacao: PropTypes.string.isRequired, // ou PropTypes.instanceOf(Date) se for um objeto Date
    onDelete: PropTypes.func.isRequired,
};

export default CardRecurso;
