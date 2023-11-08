import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Tours from './pages/Tours';
// import Donations from './pages/Donations';
// import Form from './pages/DonationForm';
import 'tailwindcss/tailwind.css';
import LandingPage from './components/LandingPage';
import WhatDoWeDo from './components/WhatDoWeDo';
import Accomplishments from './components/WhoAreWe';



function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path= '/whatwedo' element={<WhatDoWeDo/>}/>
          <Route path='/aboutus' element={<Accomplishments/>}/>
          <Route path='/' element ={<LandingPage/>}/>
        </Routes>
      </Router>

      <Footer />
    </div>
  )
}

export default App;

