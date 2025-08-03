import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login'; 
import Home from './Components/Home'; 
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import toast, { Toaster } from 'react-hot-toast';
import Register from './pages/Register';
import './firebase/config'
import LikedImages from './Components/LikedImages';
import ProtectedRoute from './Components/ProtectedRoute';
import ForgotPassword from './pages/Forgot_password';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';


function App() {



  const location = useLocation()  
  const login = location.pathname === '/login' || location.pathname ===  '/register' || location.pathname ===  '/forgotPassword'
  const [user, setUser] = useState(null)
   useEffect(()=>{
    const unsubscibe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    })
    return ()=>unsubscibe
   }, [])
  return (
    <>
      {!login && <Navbar />}
      <Toaster />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute user={user}>
            <Home />
          </ProtectedRoute>
        } />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/login" element={user ? <Navigate to={'/'} /> : <Login/>} />
        <Route path="/register" element={user ? <Navigate to={'/'} /> : <Register/>} />
        <Route path="/forgotPassword" element={user ? <Navigate to={'/'} /> : <ForgotPassword/>} />
        <Route path='/likedImages' element={<LikedImages />} />
      </Routes>
      {!login && <Footer />}
    </>

  );
}

export default App;
