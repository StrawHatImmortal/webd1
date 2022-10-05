import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css'
import Errorpage from './components/Errorpage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>  
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path='*' element={<Errorpage />} />
    </Routes>
    </>
  )
}

export default App
