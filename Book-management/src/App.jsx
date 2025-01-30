import { useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes, PrivateRoute } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home';
import './App.css'
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
 

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <PrivateRoute path = '/' element={<PrivateRoute/>}/>
      </Routes>
    </>
  )
}

export default App
