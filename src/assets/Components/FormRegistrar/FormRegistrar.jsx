import { useState } from 'react';
import './_FormRegistrar.scss';
import fecharJanelaImg from '../../../image/fecharJanela.png';

const FormRegistrar = () => {
    const [formData, setFormData] = useState({
        nome: '',
        dias1: '',
        dias2: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const isFormValid = () => {
        // Verifica se todos os campos estão preenchidos
        return formData.nome !== '' && formData.dias1 !== '' && formData.dias2 !== '';
    };

    return (
        <div className="container-FormRegistrar">
            <form className="form">
                <button className='buttonFechar'>
                    <img src={fecharJanelaImg} alt="Fechar Janela" />
                </button>

                <div className="title">
                    Registrar
                    <br />
                    <span>Plantas</span>
                </div>

                <input
                    type="text"
                    placeholder="nome"
                    name="nome"
                    className="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                />

                <div className='dias'>
                    <input
                        type="text"
                        placeholder="dias"
                        name="dias1"
                        className="input"
                        value={formData.dias1}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="dia"
                        name="dias2"
                        className="input"
                        value={formData.dias2}
                        onChange={handleInputChange}
                    />
                </div>

                <button
                    className="button-confirm"
                    disabled={!isFormValid()} // Desabilita o botão se o formulário não for válido
                >
                    Plantar →
                </button>
            </form>
        </div>
    );
};

export default FormRegistrar;
