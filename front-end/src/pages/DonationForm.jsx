
import React from 'react';
import { motion } from 'framer-motion';

function DonationForm() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='flex justify-center items-center h-screen'>
      <motion.form
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className='bg-[#FFFFFF] rounded-lg p-6 shadow-md w-96 h-1/2'>
        <h1 className='text-3xl font-semibold mb-4 text-center'>DONATION FORM</h1>
        <div className='mb-4'>
          <label className='block pb-2'>
            Name:
            <input
              className='block pb-2 border-2 border-gray-500 p-2 rounded-md w-full'
              type='text'
              placeholder='Username'
            />
          </label>
        </div>
        <div className='mb-4'>
          <label className='block pb-2'>
            Amount:
            <input
              type='text'
              className='block pb-2 border-2 border-gray-500 p-2 rounded-md w-full'
              placeholder='Enter Amount'
              required
            />
          </label>
        </div>
        <div className='mb-4'>
          <label className='block pb-2'>
            Payment Reminder:
            <select
              className='block w-full border-2 border-gray-500 p-2 rounded-md'>
              <option value='daily'>Daily</option>
              <option value='weekly'>Weekly</option>
              <option value='monthly'>Monthly</option>
              <option value='yearly'>Yearly</option>
            </select>
          </label>
        </div>
        <div className='mb-4 flex items-center'>
          <input type='checkbox' id='anonymousCheckbox' className='mr-2' />
          <label htmlFor='anonymousCheckbox'>Anonymous</label>
        </div>
        <button
          type='submit'
          className='w-full bg-[#027884] text-white border-none rounded-md py-2 px-4 cursor-pointer'>
          Donate
        </button>
      </motion.form>
    </motion.div>
  );
}

export default DonationForm;

