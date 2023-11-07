import React from 'react'


function DonationForm() {
  return (
    <div className='flex justify-center items-center h-screen'>
       <form className='bg-[#FFFFFF] rounded-lg p-6 shadow-md h-300'>
        <h1>DONATION FORM</h1>
    <div className='mb-4'>
      <label className='font-sans block pb-2'>
        Name :   
        <input
          className='font-sans block pb-2  border-2 border-gray-500 p-2 rounded-md'
          type="text"
          placeholder='    Username'
        />
      </label>
    </div>

    <div>
      <label className='font-sans block pb-2'>
        Amount:
        <input
          type="text"
          className='font-sans block pb-2  border-2 border-gray-500 p-2 rounded-md'
          placeholder='     Enter Amount'
          required
        />
      </label>

      <div>
        <label className='font-sans block pb-2'>
          Payment Reminder :
        <select
            className='font-sans block w-full border-2 border-gray-500 p-2 rounded-md'>
            <option value='daily'>daily</option>  
            <option value='weekly'>Weekly</option>
            <option value='monthly'>Monthly</option>
            <option value='yearly'>Yearly</option>
          </select>
        </label>
      </div>

      
        <div className='mb-4 flex items-center'>
          <input
            type='checkbox'
            id='anonymousCheckbox'
            className='mr-2'
          />
          <label htmlFor='anonymousCheckbox' className='font-sans'>
           Anonymous
          </label>
        </div>

    </div>
    <button
    type="submit" 
    className='w-20 bg-[#027884] text-white border-none rounded-md py-2 px-4 mt-4 cursor-pointer m-4'>
               Donate
    </button>
   </form> 

    
    
    </div>
  )
}

export default DonationForm;

