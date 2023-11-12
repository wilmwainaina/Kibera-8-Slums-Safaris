


import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

const headerStyle = {
  gridArea: 'header',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 30px 0 30px',
  boxShadow: '0 6px 7px -3px',
};

function Header({ OpenSidebar }) {
  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '10px' }}>
          <BsJustify style={{ verticalAlign: 'middle', lineHeight: '1px', fontSize: '20px' }} onClick={OpenSidebar} />
        </div>
        <div style={{ marginRight: '10px' }}>
          <BsSearch style={{ verticalAlign: 'middle', lineHeight: '1px', fontSize: '20px' }} />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <BsFillBellFill style={{ verticalAlign: 'middle', lineHeight: '1px', fontSize: '20px', marginRight: '5px' }} />
        <BsFillEnvelopeFill style={{ verticalAlign: 'middle', lineHeight: '1px', fontSize: '20px', marginRight: '5px' }} />
        <BsPersonCircle style={{ verticalAlign: 'middle', lineHeight: '1px', fontSize: '20px' }} />
      </div>
    </header>
  );
}
export default Header
