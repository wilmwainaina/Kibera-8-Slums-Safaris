import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [flashMessage, setFlashMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = () => {
    fetch('/api/User/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            const accessToken = data.access_token;
            const userRole = data.role; // Get the user's role from the response

            // Store the user's access token for future authenticated requests
            localStorage.setItem('accessToken', accessToken);

            // Navigate based on the user's role
            if (userRole === 'Admin' || userRole == 'superadmin') {
              navigate('/admin'); // Redirect to the admin page
            } else if (userRole === 'Donor') {
              navigate('/donations'); // Redirect to the donor page
            } else {
              // Handle other roles or scenarios as needed
            }
          });
        } else {
          // Login failed, handle error logic
          response.json().then((data) => {
            setFlashMessage(data.message);
            console.error(data.message);
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
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="{user_icon}" alt="" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <img src="{password_icon}" alt="" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="submit-container">
        <div
          className="submit"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </div>
      </div>
      {flashMessage && <div className="alert alert-danger">{flashMessage}</div>}
      <p>
        Don't have an account? <Link to="/signup">Sign Up here</Link>
      </p>
    </div>
  );
}

export default Login;
