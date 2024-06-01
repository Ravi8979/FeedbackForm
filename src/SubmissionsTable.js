import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import './SubmissionsTable.css';

const SubmissionsTable = ({ submissions = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddNow = () => {
    console.log("AddNow button clicked!");
    // Implement the logic to add a new submission
  };

  const handleReset = () => {
    localStorage.removeItem('feedback');
    // You might want to call a function passed from the parent to reset the submissions state there
    alert('All submissions have been reset.');
    window.location.reload(); // Simple way to reload the page and refresh the data
  };

  // Add a conditional check to ensure submissions is not undefined
  const filteredSubmissions = submissions ? submissions.filter(submission =>
    submission.name && submission.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div className="submissions-container">
      <h1>Screen 2</h1>
      <hr />
      <p>Aromatic bar</p>
      <button className="add-now-button" onClick={handleAddNow}>AddNow</button>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
        <IoIosSearch className="search-icon" />
      </form>
      <table className="submissions-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service Quality</th>
            <th>Beverage Quality</th>
            <th>Restaurant Cleanliness</th>
            <th>Overall Experience</th>
          </tr>
        </thead>
        <tbody>
          {filteredSubmissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.name}</td>
              <td>{submission.email}</td>
              <td>{submission.mobile}</td>
              <td>{submission.hostService.join(', ')}</td>
              <td>{submission.beverageQuality.join(', ')}</td>
              <td>{submission.cleanliness.join(', ')}</td>
              <td>{submission.diningExperience.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="reset-button" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default SubmissionsTable;
