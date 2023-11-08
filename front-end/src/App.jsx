import React from 'react'
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import 'tailwindcss/tailwind.css';
import LandingPage from './components/LandingPage';
import WhatDoWeDo from './components/WhatDoWeDo';
import Accomplishments from './components/WhoAreWe';
import Donations from './pages/Donations';
import Tours from './pages/Tours';
import DonationForm from './pages/DonationForm';
import AdminDashboard from './components/AdminDashboard';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/admin' element={<AdminDashboard/>}/>
          <Route path='/donationsform' element={<DonationForm/>}/>
          <Route path='/tours' element={<Tours/>}/>
          <Route path="/donations" element={<Donations/>}/>
          <Route path="/whatwedo" element={<WhatDoWeDo/>}/>
          <Route path="/aboutus" element={<Accomplishments/>}/>
          <Route path="/" element ={<LandingPage/>}/>


        </Routes>
      </Router>


      {/* <Footer /> */}
    </div>
  )
}

export default App

