import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51O81bpKzISa8iycocqCasHyPk4vVo9xxdq01l8CLT8p5ZkhKOEwTGuZa2jgfRrwyQbGUcXq5zGpLDqI07sXbknL4007Zk5Y6aB');

const DonationForm = () => {
  const [formData, setFormData] = useState({
    amount: 0,
    organization_name: '',
    is_anonymous: false,
    recurrence_interval: '',
  });

  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the donation data to your Flask backend
      const response = await axios.post('/api/donations', formData);

      // Create a Payment Intent on your server and get the client secret
      const { client_secret } = response.data;

      if (stripe && elements) {
        const { error } = await stripe.confirmCardPayment(client_secret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        });

        if (error) {
          console.error('Payment failed:', error);
          // Handle payment error here
        } else {
          console.log('Payment succeeded');
          // Handle successful payment
        }
      }
    } catch (error) {
      console.error('Error creating donation:', error);
      // Handle the error and display an error message
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const buttonStyle = {
    backgroundColor: '#027884',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  return (
    <div className='container px-4 py-14 bg-gray-100 mb-12 w-3/4 box-shadow mt-0'>
      <h2 className='text-2xl font-bold mb-4'>Donation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='font-semibold'>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className='ml-10 py-2'
          />
        </div>
        <div className='mb-4'>
          <label className='font-semibold'>Organization Name:</label>
          <input
            type="text"
            name="organization_name"
            value={formData.organization_name}
            onChange={handleChange}
            className='ml-4 py-2'
          />
        </div>
        <div className='mb-4'>
          <label className='font-semibold'>Is Anonymous:</label>
          <input
            type="checkbox"
            name="is_anonymous"
            checked={formData.is_anonymous}
            onChange={handleCheckboxChange}
            className='ml-4'
          />
        </div>
        <div className='mb-4'>
          <label className='font-semibold'>Recurrence Interval:</label>
          <select
            name="recurrence_interval"
            value={formData.recurrence_interval}
            onChange={handleChange}
            className='ml-2 py-2'
          >
            <option value="">One-Time</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='font-semibold'>Card Information:</label>
          <CardElement />
        </div>
        <button className='font-semibold' style={buttonStyle} type="submit">
          Donate
        </button>
      </form>
    </div>
  );
};

export default () => (
  <Elements stripe={stripePromise}>
    <DonationForm />
  </Elements>
);



