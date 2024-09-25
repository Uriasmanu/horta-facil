import './_FormRegistrar.scss';

const FormRegistrar = () => {
    return (
        <div className="container-FormRegistrar">
            <form className="form">
                <div className="title">
                    Registrar,
                    <br />
                    <span>Plantas</span>
                </div>
                <input type="nome" placeholder="nome" name="nome" className="nome" />
                <div className='dias'>
                    <input type="dias" placeholder="dias" name="dias" className="input" />
                    <input type="dias" placeholder="dia" name="dias" className="input" />

                </div>

                <button className="button-confirm">Plantar →</button>
            </form>
        </div>
    );
};

export default FormRegistrar;
