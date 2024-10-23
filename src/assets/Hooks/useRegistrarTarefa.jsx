import { useState } from 'react';
import axios from 'axios';

const useRegistrarTarefa = () => {
    const [formData, setFormData] = useState({ nome: '', descricao: '', idVoluntario: null }); // Altere o valor inicial de idVoluntario para null
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChangeTarefa = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value === '' ? null : value }); // Defina como null se a string estiver vazia
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const response = await axios.post('https://localhost:7193/api/tarefas', formData);
            console.log('Tarefa adicionada:', response.data);
            setFormData({ nome: '', descricao: '', idVoluntario: null }); // Reseta o formulário para null
            window.location.reload();
        } catch (error) {
            const serverMessage = error.response?.data?.message || 'Erro ao registrar a tarefa.';
            setErrorMessage(serverMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    const isFormValid = () => {
        // Verifica se o nome e a descrição não estão vazios
        return formData.nome.trim() !== '' && formData.descricao.trim() !== '';
    };

    return {
        formData,
        setFormData,
        isSubmitting,
        errorMessage,
        handleInputChangeTarefa,
        handleSubmit,
        isFormValid,
    };
};

export default useRegistrarTarefa;
