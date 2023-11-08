
//  contains all elements in the admin dashboard

import React from 'react';
import MostPopular from './MostPopular';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faList, faEnvelope, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const AdminDashboard = () => {
  const sidebarStyle = {
    width: '300px',
    position: 'fixed ',
    top: 0,
    left: 0,
    height: '100%',
    backgroundColor: '#027884',
    color: 'white',
    padding: '1rem',
    transition: 'width 0.3s',
  
  };

  const contentStyle = {
    marginLeft: '300px',
    transition: 'margin 0.3s',
  };

  const navigate=useNavigate()

  const handlemostpopularclick=()=>{
    navigate("/mostpopular")

  }
  const handlealltoursclick= ()=>{
    navigate("/alltours")
  }

  const handlemessagesclick=()=>{
    navigate("/requests")

  }


  return (
    <div>

    <div className=" text-white  h-screen mt-12 transition-all duration-300 ease-in-out">

      <div style={sidebarStyle} className='pt-12'>
        <h2 className='font-extrabold text-center pt-12  '>ADMIN DASHBOARD</h2>
        <ul className='space-y-12 pt-12'>
          <li className="p-4 hover:bg-gray-600 flex items-center " onClick={handlemostpopularclick}>
            {/* <FontAwesomeIcon icon={faStar} className="mr-2" /> */}
            Most Popular
          </li>
          <li className="p-4 hover:bg-gray-600 flex items-center" onClick={handlealltoursclick}>
            {/* <FontAwesomeIcon icon={faList} className="mr-2" /> */}
            All Tours
          </li>
          <li className="p-4 hover:bg-gray-600 flex items-center"  onClick={handlemessagesclick}>
            {/* <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> */}
            Messages
          </li>
          <li className="p-4 hover:bg-gray-600 flex items-center">
            {/* <FontAwesomeIcon icon={faCog} className="mr-2" /> */}
            Settings
          </li>
          <li className="p-4 hover:bg-gray-600 flex items-center">
            {/* <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> */}
            Logout
          </li>
        </ul>
      </div>
      <div style={contentStyle}>
        <div>
          <MostPopular/>
          <div className='mt-24'>
          <Footer/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
