import React from 'react'
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";

function TourPage() {
    const navigate = useNavigate()
    const handleBookClick=()=>{
        navigate("/bookingform")
    }
  return (
    <>
    <div className='py-24 '>
       <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Tour Information</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Price</h2>
        <p className="mb-4">The price of the tour is 2500 Ksh per person (subject to change based on exchange rates).</p>
        <p className="mb-4">If you`re in a group please contact us for special prices.</p>
        <p className="mb-4">If you`d also like transportation to and from your hotel, please put that in your reservation request.</p>
        <p className="mb-4"> Dress code maters also maters depending on the weather of the day</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Useful Information to Prepare for Your Tour</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>For pick up points you can put Adams coffee java </li>
          
          <li>Wear good walking shoes/boots. Preferably these shoes have closed noses, because of the possibility of mud and water along the way.</li>

          <li>Don`t take unnecessary valuables on the tour like jewelry, watches, or big cameras.</li>

          <li>Please respect people`s privacy. So don`t peek through windows or doors and don`t make photographs of people without asking.</li>

          <li>Please be respectful in taking pictures, both out of respect to the people as for the safety for yourself and your camera. There will be some dedicated picture-points,
             so you can take a good picture of Kibera, like the overview of Kibera at the biogas center, inside the schools, the bead-factory and inside the jewelry-workshop.
              Please ask your tour guide permission before taking a picture.</li>

          <li>If your children are coming on the tour, please make sure they can walk easily at a normal pace. If not, make sure you can carry them. Take note that the tour will 
            require a 2-to-3-hour walk. Buggies are not an option.</li>

          <li>Please don`t hand out anything during the tour. So don`t hand out money, sweets, pens, balloons and so on. 
            This can create chaos and quickly may establish the assumption that tourists`equal gifts.</li>

          <li>If you`d like to donate anything to one of the organizations or people you`ve visited during the tour,
             you can do this after the tour. We will put up some boxes at the end of the tour for donations. If you`d like to bring clothing or other items, 
             we will keep them for you on the bus during the tour, so you`ll be able to donate them after the tour. If you would rather donate once, you are home you
              can western union us your donation. Speak to your tour guide for more information or click <a href="#">here</a>.</li>

        </ul>
        <p className="mb-4">This is an all-inclusive tour. We provide some drinks and snacks, the drivers, and tour guides.</p>

        <p className="mb-4">Though we feel Kibera is the friendliest slum in the world, all tours will be accompanied by security staff (also to create some extra jobs)
         so you can just feel safe and relaxed. If you have any problems, please ask them to help you.</p>

        <p className="mb-4">All guides will be paid a fair salary. Of course, if you`d like to show THANKS to your tour guide,
         a cash gratuity/tip will be highly appreciated. There will be a tip-box at the workshop at the end of the tour. 
         The tip-money will be divided according to scores on the evaluation-forms of the guides.</p>

        <p className="mb-4">To help us improve our tour, we`d like to ask you to fill in an evaluation form after the tour.</p>

        <p>You will join the tour on your own request and responsibility. Kibera Tours will take no responsibility
           for lost property, accidents, or other unforeseen incidents.</p>

      </div>
      <p>Enjoy Kibera!</p>
      <a href="#" className="btn btn-primary btn-lg  mt-4 " style={{backgroundColor:"#027884"}} onClick={handleBookClick}>Book Now!</a>
    </div>
    
    </div>
    <Footer/>
    </>

      
  )
}

export default TourPage;
