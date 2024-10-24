import './_CardRecurso.scss'

const CardRecurso = ({nome, tipoRecurso, dataCriacao}) => {
    return (
        <div className="cardRecurso">
            <div className="notification">
                <div className="notiglow"></div>
                <div className="notiborderglow"></div>
                <div className="notititle">{tipoRecurso}</div>
                <div className="notibody">{nome}</div>
                <p className="data">{dataCriacao}</p>
            </div>
            
        </div>
    )
}

export default CardRecurso;
