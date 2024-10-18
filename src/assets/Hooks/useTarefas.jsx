import { useState } from 'react';
import axios from 'axios';

const useTarefas = () => {
    const [tarefas, setTarefas] = useState({
        Nome: '',
        Descricao: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTarefas((prevTarefas) => ({
            ...prevTarefas,
            [name]: value,
        }));
    };

    const criarTarefa = async () => {
        try {
            const response = await axios.post('https://localhost:7193/api/tarefas', {
                Nome: tarefas.Nome,
                Descricao: tarefas.Descricao,
                Voluntario: null, // Substitua isso pelo voluntário correto, se necessário
            });
            console.log('Tarefa criada:', response.data);
            // Limpar o estado após criar a tarefa
            setTarefas({ Nome: '', Descricao: '' });
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);
        }
    };

    return {
        tarefas,
        handleChange,
        criarTarefa,
    };
};

export default useTarefas;
