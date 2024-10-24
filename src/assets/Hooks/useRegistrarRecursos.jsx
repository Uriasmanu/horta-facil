import { useState } from 'react';
import axios from 'axios';

const useRegistrarRecursos = () => {
    const [formData, setFormData] = useState({ nome: '', tipoRecurso: '', dataCriacao: new Date().toISOString() });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChangeRecursos = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value === '' ? '' : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            // Envio dos dados para a API
            const response = await axios.post('https://localhost:7193/api/Recursos', formData);
            console.log('Recurso adicionado:', response.data);
            setFormData({ nome: '', tipoRecurso: '', dataCriacao: new Date().toISOString() }); // Resetando o formulário
            window.location.reload(); // Certifique-se de que isso é o que você quer
        } catch (error) {
            const serverMessage = error.response?.data?.message || 'Erro ao registrar o recurso.';
            setErrorMessage(serverMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    const isFormValid = () => {
        return formData.nome.trim() !== '' && formData.tipoRecurso.trim() !== '';
    };

    return {
        formData,
        setFormData,
        isSubmitting,
        errorMessage,
        handleInputChangeRecursos,
        handleSubmit,
        isFormValid,
    };
};

export default useRegistrarRecursos;
