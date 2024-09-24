import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './assets/Pages/Login/Login'
import Inicio from './assets/Pages/Inicio/Inicio';
import NotFound from './assets/Pages/NotFound/NotFound';
import Voluntarios from './assets/Pages/Voluntarios/Voluntarios';
import Tarefas from './assets/Pages/Tarefas/Tarefas';
import Recursos from './assets/Pages/Recursos/Recursos';
import { ColetarProvider } from './assets/Context/DropDragContext';

function App() {

  return (
    <ColetarProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/inicio' element={<Inicio/>} />
        <Route path='/voluntario' element={<Voluntarios/>} />
        <Route path='/tarefas' element={<Tarefas/>} />
        <Route path='/recurso' element={<Recursos/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
    </ColetarProvider>
  )
}

export default App
