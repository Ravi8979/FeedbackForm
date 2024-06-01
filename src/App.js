import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FeedbackForm from './FeedbackForm';
import SubmissionsTable from './SubmissionsTable';
import Screen3 from './Screen3';

function App() {
  const [submissions, setSubmissions] = useState([]);

  const handleFormSubmit = (values) => {
    console.log('Form Submitted:', values);
    setSubmissions([...submissions, values]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Feedback Form</Link>
            </li>
            <li>
              <Link to="/submissions">Submissions Table</Link>
            </li>
            <li>
              <Link to="/thank-you">Screen3</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<FeedbackForm onSubmit={handleFormSubmit} />} />
          <Route path="/submissions" element={<SubmissionsTable submissions={submissions} />} />
          <Route path="/thank-you" element={<Screen3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
