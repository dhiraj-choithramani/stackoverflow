import React from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterForm({ onSwitch }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="form-container">
      <img src="/Stack_Overflow_logo.svg.png" alt="Stack Overflow" className="logo" />
      <h1>Register now to save Questions</h1>
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
  <a href="#" onClick={onSwitch}>Already a user? Login here</a>
</form>
    </div>
  );
}

export default RegisterForm;
