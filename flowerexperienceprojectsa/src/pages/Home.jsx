import React from 'react';
import Carrossel from '../components/Carrossel/Carrossel';
import Infos from '../components/Infos/Infos';
import Footer from '../components/Footer/Footer';
import './Home.css';

const Home = ({ theme, setTheme }) => {
  return (
    <div>
      <Carrossel />
      <Infos theme={theme} setTheme={setTheme} />
      <Footer theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default Home;

