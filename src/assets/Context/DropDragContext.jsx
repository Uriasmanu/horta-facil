import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

// Criando o contexto
const ColetarContext = createContext();

// Provider para o contexto
export const ColetarProvider = ({ children }) => {
  const [items, setItems] = useState([ { id: 1, name: 'Planta A' }]);
  const [colhidos, setColhidos] = useState([]);


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
    <ColetarContext.Provider value={{ items, colhidos, onDragStart, onDrop, onDragOver }}>
      {children}
    </ColetarContext.Provider>
  );
};

ColetarProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// Hook customizado para usar o contexto
export const useColeta = () => useContext(ColetarContext);
