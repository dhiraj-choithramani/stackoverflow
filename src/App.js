// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';
import SavedQuestions from './components/SavedQuestions';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                {isLogin ? (
                  <LoginForm onSwitch={() => setIsLogin(false)} />
                ) : (
                  <RegisterForm onSwitch={() => setIsLogin(true)} />
                )}
              </div>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/saved" element={<SavedQuestions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
