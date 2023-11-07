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
      <Router>
<<<<<<< HEAD
=======
        <Routes>
          <Route path="/whatwedo" element={<WhatDoWeDo/>}/>
          <Route path="/aboutus" element={<Accomplishments/>}/>
          <Route path="/" element ={<LandingPage/>}/>


        </Routes>
      </Router>

>>>>>>> 86e1329d114f2d7e827c5caec7c4c5ebe02b6eda

      <Routes>
      <Route path="/donations" element={<Donations />} />
          <Route path="/donationform" element={<Form />} />
      <Route path="/tours" element={<Tours />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App;

