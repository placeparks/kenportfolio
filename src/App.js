import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ServicesCards from './components/ServicesCards';
import Mern from './components/Mern';


function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route id="/about" element={<About />} />
        <Route path="/services" element={<ServicesCards />} />
        <Route path="/mern" element={<Mern/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
