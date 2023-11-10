import React from 'react';
import { AiOutlineMenu, AiOutlineHome, AiFillPicture } from 'react-icons/ai';
import { BsCoin } from 'react-icons/bs';
import { LuTrees } from 'react-icons/lu'
import logosvg from '/src/assets/logo.svg';


const iconsize = 20;

function Navbar() {

  return (
    <div className='w-screen h-[120px] z-10 bg-[rgb(255,255,255)]  border-b-2 border-black shadow-lg navbar '>
      
      <div className='px-4 flex justify-between items-center w-full h-full position: absolute;'>
        <div className='flex items-center'>
          <div className='m-4'>
              <img src={logosvg} alt='logo' className='w-20' />
          </div>

          <div className=''>
            
            <ul className='flex p-24 ml-96 '>
              <NavItem icons={<AiOutlineHome size={iconsize} />} to='/' label='Home' />
              <NavItem icons={<BsCoin size={iconsize} />} to='/donations' label='Donations' />
              <NavItem icons={<LuTrees size={iconsize} />} to='/tours' label='Tours' />
              <NavItem icons={<AiFillPicture size={iconsize} />} to='/gallery' label='Gallery' />
              <NavItem icons={<AiFillPicture size={iconsize} />} to='/admin' label='Admin' />
              <NavItem icons={<AiFillPicture size={iconsize} />} to='/aboutkibera' label='About Kibera'/>


            </ul>
          
        </div>

        <div className='flex'>
          <button className='w-30 bg-[#027884] text-white border-none rounded-md py-2 px-4 mt-4 cursor-pointer m-4' >
            Log In</button>
        </div>

        <div className='flex'>
          <button className='w-30 bg-[#027884] text-white border-none rounded-md py-2 px-4 mt-4 cursor-pointer m-4'>
            Donate</button>
        </div>

        <div className='md:hidden'>
          <AiOutlineMenu className='w-9' />
        </div>
      </div>
      </div>
    </div>
  );
}

// Navigation Item Component
// function NavItem({ icon, to, label }) {
//   return (
//     <li className={location.pathname === to}>
//       <div className='flex items-center p-16'>
//         {icon}
//         <a href={to} className='flex'>
//           {label}
//         </a>
//       </div>
//     </li>
//   );
// }

// export default Navbar;

// Navigation Item Component
function NavItem({ icon, to, label }) {
  return (
    <li className="nav-item ">
      <div className="flex items-center hover:bg-slate-200 ">
        {icon}
        <a href={to} className="nav-link">
          {label}
        </a>
      </div>
    </li>
  );
}
export default Navbar;



