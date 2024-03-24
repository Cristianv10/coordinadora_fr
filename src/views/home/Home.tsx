import React from 'react';
import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to Our Website</h1>
        <p>Choose an option below to get started:</p>
        <div className="button-container">
          <Link to="/register" className="submit-button">Register</Link>
          <Link to="/login" className="submit-button">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default HomeView;


<button type="submit">Register</button>