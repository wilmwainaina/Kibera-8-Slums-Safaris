






import React, { useState } from 'react';

const AllTours = () => {
  // Example state for tonnal donations and booked tours
  const [donations, setDonations] = useState({
    totalDonations: 500,
    totalCompanies: 15,
    averageDonation: 50,
    topOrganizations: [
      { name: 'Organization A', description: 'Description of Organization A' },
      { name: 'Organization B', description: 'Description of Organization B' },
      { name: 'Organization C', description: 'Description of Organization C' },
    ],
  });

  const [bookedTours, setBookedTours] = useState([
    { company: 'Company A', date: '2023-12-01', details: 'The Tour will happen on Friday every early in the morning' },
    { company: 'Company B', date: '2023-12-05', details: 'Details...' },
    // Add more data as needed
  ]);

  const [filter, setFilter] = useState(''); // Example filter state, can be date range, organization, etc.

  // Example function for sorting tours by date
  const sortToursByDate = () => {
    setBookedTours([...bookedTours].sort((a, b) => new Date(a.date) - new Date(b.date)));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full p-8 rounded ml-44 ">

        {/* Total Donations Card */}
        <div className="bg-gray-100 rounded shadow-md p-6 mb-4 px-44 py-24">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">Total Donations</h2>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700 font-semibold">Total Donations:</span>
            <span className="text-teal-600 font-bold">{donations.totalDonations}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700 font-bold ">Total Companies:</span>
            <span className="text-teal-600 font-bold">{donations.totalCompanies}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-bold">Average Donation:</span>
            <span className="text-teal-600 font-bold">{donations.averageDonation}</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-2 text-teal-600 mt-6">Top Organizations</h3>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-teal-600 text-white py-2 px-4">Organization</th>
                  <th className="bg-teal-600 text-white py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                {donations.topOrganizations.map((org, index) => (
                  <tr key={index}>
                    <td className="border py-2 px-4">{org.name}</td>
                    <td className="border py-2 px-4">{org.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Booked Tours Card */}
        <div className="bg-gray-100 rounded shadow-md p-6 w-fit mt-14">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-teal-600">Booked Tours</h2>
            <div className="flex space-x-4">
              <button onClick={sortToursByDate} className="bg-teal-600 text-white px-4 py-2 rounded">
                Sort by Date
              </button>
              <input
                type="text"
                placeholder="Filter by Company"
                className="border px-2 py-1 rounded"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
          </div>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="bg-teal-600 text-white py-2 px-4">Company</th>
                <th className="bg-teal-600 text-white py-2 px-4">Date</th>
                <th className="bg-teal-600 text-white py-2 px-4">Details</th>
              </tr>
            </thead>
            <tbody>
              {bookedTours
                .filter((tour) => tour.company.toLowerCase().includes(filter.toLowerCase()))
                .map((tour, index) => (
                  <tr key={index}>
                    <td className="border py-2 px-4">{tour.company}</td>
                    <td className="border py-2 px-4">{tour.date}</td>
                    <td className="border py-2 px-4">{tour.details}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTours;
