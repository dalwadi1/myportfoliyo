import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Views/Home';
import About from './Views/About';
import Projects from './Views/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
