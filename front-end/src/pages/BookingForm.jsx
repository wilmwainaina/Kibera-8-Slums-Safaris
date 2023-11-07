import React from 'react'

function BookingForm() {
  return (
    <div className='flex justify-center items-center h-screen'>
    <form className='bg-[#FFFFFF] rounded-lg p-6 shadow-md h-300'>
     <h1>BOOKINGFORM</h1>
 <div className='mb-4'>
   <label className='font-sans block pb-2'>
     Name of the tour :   
     <input
       className='font-sans block pb-2  border-2 border-gray-500 p-2 rounded-md'
       type="text"
       placeholder='    Username'
     />
   </label>
 </div>

 <div>
   <label className='font-sans block pb-2'>
     Date of the tour :
     <input
       type="text"
       className='font-sans block pb-2  border-2 border-gray-500 p-2 rounded-md'
       placeholder='     Enter Amount'
       required
     />
   </label>

 </div>
 <button
 type="submit" 
 className='text-center w-22 bg-[#027884] text-white border-none rounded-md py-2 px-4 mt-4 cursor-pointer m-4'>
            Book Now
 </button>
</form> 

 
 
 </div>
  )
}

export default BookingForm;