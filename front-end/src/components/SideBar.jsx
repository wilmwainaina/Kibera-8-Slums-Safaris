import React from 'react'

const Sidebar = () => {

      const sidebarStyle = {
    width: '300px',
    position: 'fixed ',
    top: '0',
    left: 0,
    height: '100%',
    backgroundColor: '#027884',
    color: 'white',
    padding: '1rem',
    transition: 'width 0.3s',
  
  };

  return (
    <div className="w-96 py-36   text-white h-screen" style={sidebarStyle}>
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-16">Dashboard</h2>
      <ul className='ml-12 '>
        <li className="flex items-center mb-16 font-bold">
          <span className="mr-2">🏠</span>
          <a href="/admin">Dashboard</a>
        </li>
        <li className="flex items-center mb-16 font-bold">
          <span className="mr-2">🏆</span>
          <a href="/admin/mostpopular">Most Popular</a>
        </li>
        <li className="flex items-center mb-16 font-bold">
          <span className="mr-2">🚘</span>
          <a href="/admin/alltours">All Tours</a>
        </li>
        <li className="flex items-center mb-16 font-bold">
          <span className="mr-2">📥</span>
          <a href="/admin/recentrequests">Recent Requests</a>
        </li>
        <li className="flex items-center mb-4 font-bold">
          <span className="mr-2">🚪</span>
          <a href="/login">Logout</a>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Sidebar