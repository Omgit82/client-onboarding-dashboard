import React from 'react';
import { Link } from 'react-router-dom';  // For navigation (optional, if you use React Router)
import './Sidebar.css';  // Import the CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/feature">Feature Adoption</Link>
        </li>
        <li>
          <Link to="/support">Support Tickets</Link>
        </li>
        <li>
          <Link to="/onboarding">Onboarding Status</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
