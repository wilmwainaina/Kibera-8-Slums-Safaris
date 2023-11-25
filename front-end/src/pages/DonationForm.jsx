import React, { useState } from 'react';
import { motion } from 'framer-motion';

function DonationForm() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleRemoveForm = () => {
    setShowForm(false);
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleButtonClick}
      >
        {showForm ? 'Hide Form' : 'Show Form'}
      </button>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        >
          <button
            className='absolute top-0 right-0 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full m-4'
            onClick={handleRemoveForm}
          >
            Remove
          </button>

          <motion.form
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-[#FFFFFF] rounded-lg p-6 shadow-md w-96 h-1/2'
          >
            <h1 className='text-3xl font-semibold mb-4 text-center'>DONATION FORM</h1>
            {/* Rest of your form code */}
          </motion.form>
        </motion.div>
      )}
    </div>
  );
}

export default DonationForm;

