import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Plantas from './pages/Plantas';
import Desidratadas from './pages/Desidratadas';
import Arranjos from './pages/Arranjos';
import Orquideas from './pages/Orquideas';
import Usuario from './pages/Usuario';
import Adm from './pages/Adm';
import TelaArranjos from './pages/TelaArranjos';
import TelaPlantas from './pages/TelaPlantas';
import TelaDesidratadas from './pages/TelaDesidratadas';
import TelaOrquideas from './pages/TelaOrquideas';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <div className={`container-main ${theme}`}>
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
          <Route path="/plantas" element={<Plantas />} />
          <Route path="/desidratadas" element={<Desidratadas />} />
          <Route path="/arranjos" element={<Arranjos />} />
          <Route path="/orquideas" element={<Orquideas />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path='/adm' element={<Adm/>} />
          <Route path='/telaarranjos' element={<TelaArranjos/>} />
          <Route path='/telaplantas' element={<TelaPlantas/>} />
          <Route path='/teladesidratadas' element={<TelaDesidratadas/>} />
          <Route path='/telaorquideas' element={<TelaOrquideas/>} />
          <Route path='/login' element={<Login theme={theme} setTheme={setTheme}/>} />
          <Route path='/cadastro' element={<Cadastro theme={theme} setTheme={setTheme}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
