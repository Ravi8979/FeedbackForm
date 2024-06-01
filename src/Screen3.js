import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcOk } from "react-icons/fc";
import './Screen3.css'; // Import a CSS file for styling

function Screen3() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); // Navigate back to the main screen
  };

  return (
    <div className="screen-container">
      <h1>Screen 3</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>Thank You</h2>
      <big>
        <p>Thank you for providing the feedback.</p>
      <small>
      <p>We will work towards improving your experience.</p>
      </small>
      </big>

      <button className="close-button" type="button" onClick={handleClose}>Close</button>
      
      {/* Use CSS for positioning and styling the FcOk icon */}
      <FcOk className="ok-icon" />
    </div>
  );
}

export default Screen3;