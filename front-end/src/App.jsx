import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Tours from './pages/Tours';
import Donations from './pages/Donations';
import Form from './pages/DonationForm';
import 'tailwindcss/tailwind.css';



function App() {
  return (
    <div>
      <Navbar />
      <Router>

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

