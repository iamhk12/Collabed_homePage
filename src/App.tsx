import { FC } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Windows from './Components/Windows';
import Imageslide from './Components/Imageslide';
import Cards from './Components/Cards';
import Fyq from './Components/Fyq';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';

const App: FC = () => {
  return (
    <>
      <Navbar/>
      <Windows/>
      <Imageslide/>
      <Cards/>
      <Fyq/>
      <Contactus/>
      <Footer/>
    </>
  );
}

export default App;