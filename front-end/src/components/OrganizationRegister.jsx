// OrganizationRequestPage.js
import React, { useState, useEffect } from 'react';

function OrganizationRequestPage() {
  const [organizationRequests, setOrganizationRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({});

  useEffect(() => {
    // Fetch organization requests from your API when the component mounts
    fetch('/api/organizations/requests')
      .then((response) => response.json())
      .then((data) => setOrganizationRequests(data))
      .catch((error) => console.error(error));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to submit a new organization request
    fetch('/api/organizations/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRequest),
    })
      .then((response) => response.json())
      .then((data) => {
        setOrganizationRequests([...organizationRequests, data]);
        setNewRequest({});
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Organization Request Page</h1>
      <h2>Submit a New Organization Request</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Name:
          <input
            type="text"
            name="name"
            value={newRequest.name || ''}
            onChange={(e) => setNewRequest({ ...newRequest, name: e.target.value })}
            required
          />
        </label>
        <label>Description:
          <input
            type="text"
            name="description"
            value={newRequest.description || ''}
            onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
            required
          />
        </label>
        <label>Email:
          <input
            type="email"
            name="email"
            value={newRequest.email || ''}
            onChange={(e) => setNewRequest({ ...newRequest, email: e.target.value })}
            required
          />
        </label>
        <button type="submit">Submit Request</button>
      </form>
      <h2>Organization Requests</h2>
      <ul>
        {organizationRequests.map((request) => (
          <li key={request.id}>
            <strong>Name:</strong> {request.name}<br />
            <strong>Description:</strong> {request.description}<br />
            <strong>Email:</strong> {request.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrganizationRequestPage;
