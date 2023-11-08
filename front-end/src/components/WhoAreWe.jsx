import React from 'react';
import Founding from './Founding';
import FounderMessage from './FounderMessage';
import Footer from './Footer';

function Accomplishments() {
  return (
    <div>
      
    <div className="container">

      <div className="content">
        <section id="hero">
          <div className="hero-banner ">
            <span className="overlay-text text-white">KIBERA 8 SLUM  SAFARIS <br/> WHO ARE WE?</span>
          </div>
        </section>

        <Founding/>
        <FounderMessage/>
        
         </div>
    </div>
    <Footer/>

    </div>
  );
}

export default Accomplishments;
