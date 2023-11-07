import React from 'react';
import {AiFillFacebook, AiFillGithub, AiOutlineInstagram, AiFillTwitterSquare} from 'react-icons/ai';


function Footer() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
      </div>
      <footer className='max-w-[1240] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 bg-[#840E02] text-[#FFFFFF]'>
        <div>
          <h1 className='text-2xl font-bold mr-4 sm:text-4xl'>
            KIBERA 8 SLUM SAFARIS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, atque similique consequatur eaque consectetur aut vel perspiciatis molestiae asperiores, laboriosam numquam. Quaerat cupiditate deserunt rem animi corporis, 
          ipsam maiores ratione.</p>
        </div>

        <div className='flex justify-between md:w-[75%] my-6'>
          <AiFillFacebook size={30}/>
          <AiFillGithub size={30}/>
          <AiFillTwitterSquare size={30}/>
          <AiOutlineInstagram size={30}/>
       
        </div>
       
      
       
      </footer>
    </div>
  );
}

export default Footer;