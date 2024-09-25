import './_CardPantas.scss'
import './_CardPantasMobile.scss'
import legume from '../../../image/Greenery.svg'
import PropTypes from 'prop-types';

const CardPantas = ({ data, onDragStart }) => {
    return (
        <div
            className="container-CardPantas"
            draggable
            onDragStart={(event) => onDragStart(event, data)}
            
        >

            <div className="card">
                <div className="card-border-top">
                </div>
                <div className="img">
                    <img src={legume} alt="" />
                </div>
                <span> {data.nome}</span>
                <p className="job"> 21/09/24</p>
                <button> Click
                </button>
            </div>
        </div>
    )
}

CardPantas.propTypes = {
    data: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onDragStart: PropTypes.func.isRequired, // Garantindo que onDragStart é passado como função
};

export default CardPantas;