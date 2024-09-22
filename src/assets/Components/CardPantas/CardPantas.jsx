import './_CardPantas.scss'
import legume from '../../../image/Greenery.svg'

const CardPantas = () => {
    return (
        <div className="container-CardPantas">

            <div className="card">
                <div className="card-border-top">
                </div>
                <div className="img">
                    <img src={legume} alt="" />
                </div>
                <span> Person</span>
                <p className="job"> 21/09/24</p>
                <button> Click
                </button>
            </div>
        </div>
    )
}

export default CardPantas;