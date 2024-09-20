import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './assets/Pages/Login/Login'
import Inicio from './assets/Pages/Inicio/Inicio';
import NotFound from './assets/Pages/NotFound/NotFound';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/inicio' element={<Inicio/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App
