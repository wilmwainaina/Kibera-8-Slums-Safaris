import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Tours from './pages/Tours';
import Donations from './pages/Donations';
import Form from './pages/DonationForm';
import 'tailwindcss/tailwind.css';
import LandingPage from './components/LandingPage';
import WhatDoWeDo from './components/WhatDoWeDo';
import Accomplishments from './components/WhoAreWe';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />

      <Footer />
    </div>
  )
}

export default App;

