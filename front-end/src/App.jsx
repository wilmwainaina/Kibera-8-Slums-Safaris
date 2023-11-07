import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'tailwindcss/tailwind.css';
import LandingPage from './components/LandingPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element ={<LandingPage/>}/>
        </Routes>
      </Router>


      <Footer />
    </div>
  )
}

export default App

