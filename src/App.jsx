import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login'; // joylashganiga qarab to'g'rilang
import Home from './Components/Home'; // kerak bo'lsa yozing
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import toast, { Toaster } from 'react-hot-toast';
import Register from './pages/Register';


function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<>
          <Home />
        </>} />


        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
