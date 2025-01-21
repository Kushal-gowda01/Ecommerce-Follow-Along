import React, { useState } from "react";
import "./login.css";
import logo from '../assets/user.png';

export default function Example() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState); // Safely toggle the state
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img alt="Your Company" src={logo} className="logo" />
        <h2 className="title">Sign in to your account</h2>
      </div>

      <div className="form-container">
        <form className="form" action="#" method="POST">
          <div className="form-group">
            <label htmlFor="email" className="label">Email address</label>
            <input id="email" name="email" type="email" required className="input" />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="label">Password</label>
            <div className="password-container">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="input"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="toggle-password"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.466C4.955 7.364 7.276 5.25 12 5.25c4.723 0 7.045 2.114 8.02 3.216a3.984 3.984 0 01.89 2.284c0 .88-.324 1.696-.89 2.284-.975 1.102-3.297 3.216-8.02 3.216-4.723 0-7.045-2.114-8.02-3.216a3.984 3.984 0 01-.89-2.284c0-.88.324-1.696.89-2.284z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.466C4.955 7.364 7.276 5.25 12 5.25c4.723 0 7.045 2.114 8.02 3.216a3.984 3.984 0 01.89 2.284c0 .88-.324 1.696-.89 2.284-.975 1.102-3.297 3.216-8.02 3.216-4.723 0-7.045-2.114-8.02-3.216a3.984 3.984 0 01-.89-2.284c0-.88.324-1.696.89-2.284z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <line x1="4.5" y1="4.5" x2="19.5" y2="19.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                )}
              </button>
            </div>
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
          </div>

          <div className="remember-me-container">
            <input id="remember-me" name="remember-me" type="checkbox" className="checkbox" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <div>
            <button type="submit" className="submit-btn">Sign in</button>
          </div>

          <div className="signup-link">
            Don't have an account? <a href="#">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
}
