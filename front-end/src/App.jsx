import React from 'react'
import Navbar from './components/Navbar';
import 'tailwindcss/tailwind.css';
import LandingPage from './components/LandingPage';
import WhatDoWeDo from './components/WhatDoWeDo';
import Accomplishments from './components/WhoAreWe';
import Donations from './pages/Donations';
import Tours from './pages/Tours';
import DonationForm from './pages/DonationForm';
import AdminDashboard from './components/AdminDashboard';
import PhotoGalleryAK from './components/Gallery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutKibera from './components/AboutKibera';
import GalleryPart from './components/GalleryPart';
import Facts from './components/Facts';
import IntroductionPart from './components/IntroductionPart';
import OrganizationDashboard from './components/OrganizationDashboard';
import LoginSignup from './components/LoginSignup';


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          
          <Route path='/introduction' element={<IntroductionPart/>}/>
          <Route path='/facts' element={<Facts/>}/>
          <Route path='/photogallery' element={<GalleryPart/>}/>
          <Route path='/aboutkibera' element={<AboutKibera/>}/>
          <Route path='/gallery' element={<PhotoGalleryAK/>}/>
          <Route path='/admin' element={<AdminDashboard/>}/>
          <Route path='/organizationdashboard' element={<OrganizationDashboard/>}/>
          <Route path='/donationsform' element={<DonationForm/>}/>
          <Route path='/tours' element={<Tours/>}/>
          <Route path='/login/signup' element={<LoginSignup/>}/>
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

