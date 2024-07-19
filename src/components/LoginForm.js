// src/components/LoginForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm({ onSwitch }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="form-container">
      <img src="/Stack_Overflow_logo.svg.png" alt="Stack Overflow" className="logo" />
      <h1>Login to view saved Questions</h1>
      <form className="form" onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" id="email" placeholder="Email" required />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" id="password" placeholder="Password" required />
  </div>
  <button type="submit">Sign In</button>
  <a href="#" onClick={onSwitch}>Not a User? Register here</a>
</form>
    </div>
  );
}

export default LoginForm;
