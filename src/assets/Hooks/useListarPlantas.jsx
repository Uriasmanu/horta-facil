import { useState, useEffect } from "react";
import axios from "axios";

const useListarPlantas = () => {
    // Estados para armazenar as plantas, mensagem de erro e status de carregamento
    const [plantas, setPlantas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // Função para buscar todas as plantas da API
    const buscarPlantas = async () => {
        setIsLoading(true); // Define como carregando
        try {
            const response = await axios.get('https://localhost:7193/api/Planta/plantas');
            setPlantas(response.data); // Armazena as plantas no estado
            setIsLoading(false); // Carregamento completo
        } catch (error) {
            console.error('Erro ao buscar plantas:', error);
            setErrorMessage('Erro ao buscar plantas. Tente novamente.');
            setIsLoading(false); // Finaliza carregamento em caso de erro
        }
    };

    // useEffect para buscar as plantas ao carregar o hook
    useEffect(() => {
        buscarPlantas(); // Busca as plantas ao montar o componente
    }, []);

    return {
        plantas,        // Retorna a lista de plantas
        isLoading,      // Retorna o estado de carregamento
        errorMessage,   // Retorna qualquer mensagem de erro
    };
};

export default useListarPlantas;
