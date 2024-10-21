import { useState } from 'react';
import axios from 'axios';

const useRegistrarTarefa = () => {
    const [formData, setFormData] = useState({ nome: '' }); // Ajustado
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const response = await axios.post('https://localhost:7193/api/tarefas', formData);
            console.log('tarefas adicionado:', response.data);
            setFormData({ nome: '' }); // Reseta o formulário
            window.location.reload();

        } catch (error) {
            const serverMessage = error.response?.data?.message || 'Erro ao registrar o tarefas.';
            setErrorMessage(serverMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    const isFormValid = () => {
        return formData.nome.trim() !== '';
    };

    return {
        formData,
        isSubmitting,
        errorMessage,
        handleInputChange,
        handleSubmit,
        isFormValid,
    };

};

export default useRegistrarTarefa;
