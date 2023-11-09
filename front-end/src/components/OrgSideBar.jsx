import React from 'react'
import 
{BsFillBarChartFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck}
 from 'react-icons/bs';
import { FaSignOutAlt } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

function OrgSidebar({openSidebarToggle}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <FiUser size={32} color="black" /> Admin Page
            </div>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillBarChartFill size={32} color="black"/> Overview
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Organizations
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Donors
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Funds Tracker
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <FaSignOutAlt size={32} color="black" /> Sign Out
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default OrgSidebar