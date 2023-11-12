
import React from 'react';
import { FiUser } from 'react-icons/fi';
import { BsFillBarChartFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck } from 'react-icons/bs';
import { FaSignOutAlt } from 'react-icons/fa';

const OrgSidebar = ({ openSidebarToggle }) => {
  const sidebarStyle = {
    display: 'grid',
    gridArea: 'sidebar',
    height: '100%',
    backgroundColor: '#027884',
    overflowY: 'auto',
    transition: 'all 0.5s',
    WebkitTransition: 'all 0.5s',
    position: 'absolute',
    zIndex: openSidebarToggle ? 12 : 'initial',
  };

  const titleStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px 0px 30px',
    marginBottom: '30px',
  };

  const brandStyle = {
    marginTop: '15px',
    fontSize: '20px',
    fontWeight: '700',
    color: '#fff',
  };

  const listItemStyle = {
    padding: '20px 20px 20px 20px',
    fontSize: '18px',
    cursor: 'pointer',
    color: '#000000',
    textDecoration: 'none',
  };

  return (
    <aside style={sidebarStyle} id="sidebar">
      <div style={titleStyle} className="sidebar-title">
        <div style={brandStyle} className="sidebar-brand">
          <FiUser size={32} color="black" /> Admin Page
        </div>
      </div>

      <ul style={{ padding: 0, listStyleType: 'none' }} className="sidebar-list">
        <li style={listItemStyle} className="sidebar-list-item">
          <a href="" style={listItemStyle}>
            <BsFillBarChartFill size={32} color="black" /> Overview
          </a>
        </li>
        <li style={listItemStyle} className="sidebar-list-item">
          <a href="" style={listItemStyle}>
            <BsFillGrid3X3GapFill /> Organizations
          </a>
        </li>
        <li style={listItemStyle} className="sidebar-list-item">
          <a href="" style={listItemStyle}>
            <BsPeopleFill /> Donors
          </a>
        </li>
        <li style={listItemStyle} className="sidebar-list-item">
          <a href="" style={listItemStyle}>
            <BsListCheck /> Funds Tracker
          </a>
        </li>
        <li style={listItemStyle} className="sidebar-list-item">
          <a href="" style={listItemStyle}>
            <FaSignOutAlt size={32} color="black" /> Sign Out
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default OrgSidebar;

