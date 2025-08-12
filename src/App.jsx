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
import Profile from './pages/Profile';


function App() {



  const location = useLocation()  
  const login = location.pathname === '/login' || location.pathname ===  '/register'
  const [user, setUser] = useState(null)
   useEffect(()=>{
    const unsubscibe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    })
    return ()=>unsubscibe
   }, [])
  return (
    <>
      {!login && <Navbar  user={user} setUser={setUser}/>}
      <Toaster />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute user={user}>
            <Home />
          </ProtectedRoute>
        } />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/login" element={user ? <Navigate to={'/'} /> : <Login setUser={setUser}/>} />
        <Route path="/register" element={user ? <Navigate to={'/'} /> : <Register  setUser={setUser}/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path='/likedImages' element={<LikedImages />} />
        <Route path='/profile' element={<Profile user={user} setUser={setUser} />} />
      </Routes>
      {!login && <Footer />}
    </>

  );
}

export default App;
