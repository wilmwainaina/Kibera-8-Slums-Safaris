import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './LoginSignup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'Donor',
  });
  const [flashMessage, setFlashMessage] = useState('');
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  const handleRegistration = () => {
    fetch('/api/User/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    })
      .then((response) => {
        console.log(registrationData);
        console.log(response);
        if (response.ok) {

          // Registration successful, handle success logic
          console.log('Registration successful');
          navigate('/login')
          // You can add logic for successful registration, e.g., redirect to login
        } else {
          response.json().then((data) => {
            console.error('Registration failed:', data); // Log the error message
            setFlashMessage(data.message); // Display the error message
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="{user_icon}" alt="" />
          <input
            type="text"
            placeholder="Name"
            name="username"
            value={registrationData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <img src="{email_icon}" alt="" />
          <input
            type="email"
            placeholder="Email Id"
            name="email"
            value={registrationData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <img src="{password_icon}" alt="" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={registrationData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Role"
            name="role"
            value={registrationData.role}
            disabled // This makes the input field disabled
          />
        </div>
      </div>

      <div className="submit-container">
        <div
          className="submit"
          onClick={() => {
            handleRegistration();
          }}
        >
          Sign Up
        </div>
        <p>
          Already have an account? <Link to="/login">Login here</Link> {/* Link to the login page */}
        </p>
      </div>
      {flashMessage && <div className="alert alert-danger">{flashMessage}</div>}
    </div>
  );
}

export default Signup;
