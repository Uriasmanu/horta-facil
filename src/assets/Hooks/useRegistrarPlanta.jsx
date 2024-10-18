import { useState } from 'react';
import axios from 'axios';

const useRegistrarPlanta = () => {
    const [formData, setFormData] = useState({
        nomePlanta: '',
        diasParaColheita: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Extrair o nome e o valor do input
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value, // Atualizar o estado correspondente ao nome do input
        }));
    };
    

    const isFormValid = () => {
        return formData.nomePlanta !== '' && formData.diasParaColheita !== ''; // Validando os campos corretos
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!isFormValid()) {
            return;
        }
    
        setIsSubmitting(true);
        setErrorMessage('');
    
        try {
            console.log("Enviando os seguintes dados:", formData); // Verificar os dados antes de enviar
    
            const response = await axios.post('https://localhost:7193/api/Planta/plantas', {
                nomePlanta: formData.nomePlanta,
                diasParaColheita: parseInt(formData.diasParaColheita, 10), // Converte para inteiro

            });
    
            console.log('Planta registrada com sucesso:', response.data);
            setFormData({
                nomePlanta: '', // Limpa o campo após o envio
                diasParaColheita: '' // Limpa o campo após o envio
            });
        } catch (error) {
            console.error('Erro ao registrar planta:', error);
            setErrorMessage('Erro ao registrar a planta. Tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return {
        formData,
        handleInputChange,
        isFormValid,
        handleSubmit,
        isSubmitting,
        errorMessage
    };
};

export default useRegistrarPlanta;
