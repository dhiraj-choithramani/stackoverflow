import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleSavedQuestions = () => {
    navigate('/saved');
  };

  return (
    <>
    <button className="saved-questions-button" onClick={handleSavedQuestions}>
        Saved Questions
      </button>
    <div className="home-container">
      <img src="/Stack_Overflow_logo.svg.png" alt="Stack Overflow" className="logo" />
      <h1>Search Your Questions to Save</h1>
      <div className="search-container">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search..." />
        </div>
        <button className="add-button">+</button>
      </div>
    </div>
    </>
  );
}

export default Home;
