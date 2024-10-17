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
      setItems(response.data.$values); // Acessa as plantas no array $values
      setIsLoading(false); // Carregamento concluído
    } catch (error) {
      console.error('Erro ao buscar plantas:', error);
      setErrorMessage('');
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

  const onDrop = async (event, target) => {
    event.preventDefault();

    // Recupera os dados arrastados (JSON) e converte de volta para objeto
    const data = event.dataTransfer.getData('text/plain');
    const planta = JSON.parse(data);

    if (target === 'colhidos') {
      // Remover da lista de items e adicionar a colhidos
      setItems((prevItems) => prevItems.filter(item => item.id !== planta.id));

      // Adicionar a colhidos, mas evitar duplicatas
      setColhidos((prevColhidos) => {
        const isAlreadyInColhidos = prevColhidos.some(colhido => colhido.id === planta.id);
        if (!isAlreadyInColhidos) {
          return [...prevColhidos, planta];
        }
        return prevColhidos; // Não adiciona duplicata
      });

       // Realizar a chamada DELETE para remover a planta da API
       try {
        await axios.delete(`https://localhost:7193/api/Planta/plantas/${planta.id}`);
        console.log(`Planta ${planta.id} coletada e removida com sucesso.`);
    } catch (error) {
        console.error(`Erro ao remover planta ${planta.id}:`, error);
    }


    } else if (target === 'items') {
      // Remover da lista de colhidos e adicionar de volta para items
      setColhidos((prevColhidos) => prevColhidos.filter(colhido => colhido.id !== planta.id));

      // Adicionar a items novamente
      setItems((prevItems) => {
        const isAlreadyInItems = prevItems.some(item => item.id === planta.id);
        if (!isAlreadyInItems) {
          return [...prevItems, planta];
        }
        return prevItems; // Não adiciona duplicata
      });
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
