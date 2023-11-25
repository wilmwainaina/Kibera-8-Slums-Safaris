import React from 'react';
import {AiFillFacebook, AiFillGithub, AiOutlineInstagram, AiFillTwitterSquare} from 'react-icons/ai';


function Footer() {
  return (
    <div className="flex flex-col ">
      <div className="flex-grow">
      </div>
      <footer className='max-w-[1240] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 bg-[#840E02] text-[#FFFFFF]'>
        <div>
          <h1 className='text-2xl font-bold mr-4 sm:text-4xl'>
            KIBERA 8 SLUM SAFARIS</h1>
          <p>Empowering Hope, Transforming Lives: Bridging Hearts for a Better Tomorrow in the Slums.</p>
        </div>

        <div className='flex justify-between md:w-[75%] my-6'>
          <AiFillFacebook size={30}/>
          <AiFillGithub size={30}/>
          <AiFillTwitterSquare size={30}/>
          <AiOutlineInstagram size={30}/>
       <br></br>
       <div className='px-4'>
        <p>Contact us on ; +25412345678</p>
        <p>Email; org@gmail.com</p>
       </div>

        </div>
       
      
       
      </footer>
    </div>
  );
}

export default Footer;