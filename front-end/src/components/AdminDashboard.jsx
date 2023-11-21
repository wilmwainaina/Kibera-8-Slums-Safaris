
import React from 'react'
import Sidebar from './SideBar';
import MostPopular from './MostPopular';
import AllTours from './AllTours';
import RecentRequests from './RecentRequests';

// import Navbar from './Navbar';

const Dashboard = () => {
  return (
    
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 ">
        <Sidebar />
        <div className=" p-8 "> 
          < MostPopular/>
          <AllTours/>
          <RecentRequests/>


        </div>
        </div>
        
      </div>
    
  )
}

export default Dashboard