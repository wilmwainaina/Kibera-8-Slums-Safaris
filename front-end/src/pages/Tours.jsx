

import React, { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import PaymentMethod from '../components/PaymentMethod';

function TourPage() {
  const navigate = useNavigate();
  const [showAllInformation, setShowAllInformation] = useState(false);

  const handleViewMoreClick = () => {
    setShowAllInformation(!showAllInformation);
  };

  const handleBookClick = () => {
    navigate('/bookingform');
  };

  return (
    <>
      <div className="py-24 ">
        <div className="container mx-auto p-4 bg-gray-200 shadow-lg rounded-lg mt-0">
          <h1 className="text-3xl font-semibold mb-4 text-center text-gray-800">Tour Information</h1>
          <div className="mb-8">
  <h2 className="text-xl font-semibold mb-6">Price</h2>
  <ul className="list-disc pl-6 mb-8">
    <li className="text-gray-700 mb-3">The price of the tour is 2500 Ksh per person (subject to change based on exchange rates).</li>
    <li className="text-gray-700 mb-3">If you`re in a group, please contact us for special prices.</li>
    <li className="text-gray-700 mb-3">If you`d also like transportation to and from your hotel, please put that in your reservation request.</li>
    <li className="text-gray-700 mb-3">Dress code matters also depending on the weather of the day.</li>
  </ul>
</div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Useful Information to Prepare for Your Tour</h2>
            <ul className="list-disc pl-6 mb-4">
              <li className="text-gray-700">For pick up points, you can put Adams coffee java </li>
              <li className="text-gray-700">Wear good walking shoes/boots. Preferably these shoes have closed noses, because of the possibility of mud and water along the way.</li>

              {showAllInformation && (
                <>
                  <li className="text-gray-700">Please respect people`s privacy. So don`t peek through windows or doors and don`t make photographs of people without asking.</li>
                  <li className="text-gray-700">Please be respectful in taking pictures, both out of respect to the people as for the safety for yourself and your camera. There will be some dedicated picture-points, so you can take a good picture of Kibera, like the overview of Kibera at the biogas center, inside the schools, the bead-factory and inside the jewelry-workshop. Please ask your tour guide permission before taking a picture.</li>
                </>
              )}

              {!showAllInformation && (
                <li>
                  <button className="text-blue-500" onClick={handleViewMoreClick}>
                    View More
                  </button>
                </li>
              )}
            </ul>
            <p className="mb-4 text-gray-700">This is an all-inclusive tour. We provide some drinks and snacks, the drivers, and tour guides.</p>

            <p className="mb-4 text-gray-700">Though we feel Kibera is the friendliest slum in the world, all tours will be accompanied by security staff (also to create some extra jobs) so you can just feel safe and relaxed. If you have any problems, please ask them to help you.</p>

            <p className="mb-4 text-gray-700">All guides will be paid a fair salary. Of course, if you`d like to show THANKS to your tour guide, a cash gratuity/tip will be highly appreciated. There will be a tip-box at the workshop at the end of the tour. The tip-money will be divided according to scores on the evaluation-forms of the guides.</p>

            <p className="mb-4 text-gray-700">To help us improve our tour, we`d like to ask you to fill in an evaluation form after the tour.</p>

            <p className="text-gray-700">You will join the tour on your own request and responsibility. Kibera Tours will take no responsibility for lost property, accidents, or other unforeseen incidents.</p>
          </div>
          <p className="text-center text-gray-800">Enjoy Kibera!</p>
          <div className="flex justify-center">
            <a href="#" className="btn btn-primary btn-lg mt-4 bg-teal-600 text-white hover:bg-teal-700" onClick={handleBookClick}>
              Book Now!
            </a>
          </div>
        </div>
      </div>
      <PaymentMethod />
      <Footer />
    </>
  );
}

export default TourPage;
