import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Donut from './Components/Donut';
import Upload from './Components/Upload';
import SimpleSlider from './Components/Slick_Slider';
import Home from './Components/Main';
import { FaCloudUploadAlt } from 'react-icons/fa';
import Slider from 'react-slick';
import Nav from './Components/Nav';
import Main from './Components/Main';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Nav/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/donut' element={<Donut/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/slider' element={<SimpleSlider/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
