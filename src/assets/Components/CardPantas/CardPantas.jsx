import './_CardPantas.scss'
import legume from '../../../image/Greenery.svg'

const CardPantas = ({ data, onDragStart }) => {
    return (
        <div
            className="container-CardPantas"
            draggable
            onDragStart={(e) => {
                e.dataTransfer.setData('application/json', JSON.stringify(data));
                onDragStart();
            }}
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

export default CardPantas;