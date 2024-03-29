import React from 'react'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact';
import Diseases from './Pages/Diseases'
import ContactUs from './Components/ContactUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/diseases' element={<Diseases />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
