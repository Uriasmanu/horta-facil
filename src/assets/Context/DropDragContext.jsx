import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

// Criando o contexto
const ColetarContext = createContext();

// Provider para o contexto
export const ColetarProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [colhidos, setColhidos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Adicionando estado de carregamento

  // Função para buscar plantas do backend
  const listarPlantas = async () => {
    try {
      const response = await axios.get('https://localhost:7193/api/Planta/plantas'); // Requisição para API
      setItems(response.data); // Armazena as plantas no estado items
      setIsLoading(false); // Carregamento concluído
    } catch (error) {
      console.error('Erro ao buscar plantas:', error);
      setErrorMessage('Erro ao buscar plantas. Tente novamente.');
      setIsLoading(false); // Finaliza carregamento em caso de erro
    }
  };

  // useEffect para buscar as plantas quando o componente monta
  useEffect(() => {
    listarPlantas(); // Busca as plantas ao montar o componente
  }, []);

  // Funções para arrastar e soltar
  const onDragStart = (event, planta) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(planta)); // Armazena a planta em formato JSON
  };

  const onDrop = (event, target) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const planta = JSON.parse(data); // Converte de volta o JSON para objeto

    if (target === 'colhidos') {
      // Remover da lista de items e adicionar a colhidos
      setItems((prevItems) => prevItems.filter(item => item.id !== planta.id));
      setColhidos((prevColhidos) => [...prevColhidos, planta]);
    } else if (target === 'items') {
      // Se necessário, adicione lógica para mover de volta para items
    }
  };

  const onDragOver = (event) => {
    event.preventDefault(); // Para permitir o drop
  };


  return (
    <ColetarContext.Provider value={{ items, colhidos, onDragStart, onDrop, onDragOver, isLoading, errorMessage }}>
      {children}
    </ColetarContext.Provider>
  );
};

ColetarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook customizado para usar o contexto
export const useColeta = () => useContext(ColetarContext);
