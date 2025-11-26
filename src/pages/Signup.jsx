import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png';
import '../styles/Signup.css';
import google from '../assets/Google.png';

function Signup() {
  return (
    <>
      <div className="signup-logo-wrapper">
        <img src={logo} alt="MentorHub" className="signup-logo" />
      </div>

      <div className="signup-container">
        <div className="signup-header">
          <div className="signup-header-text">Create Account</div>
          <p className="signup-subtext">Get started with an account</p>
        </div>

        <button className="signup-google-btn">
          <img src={google} alt="Google logo" />
          Sign in with Google
        </button>

        <div className="signup-inputs">
          <div className="signup-input">
            <input type="email" className="signup-ip" placeholder="Your Email" />
          </div>

          <div className="signup-input">
            <input type="password" className="signup-ip" placeholder="Password" />
          </div>

          <div className="signup-input">
            <input type="password" className="signup-ip" placeholder="Confirm Password" />
          </div>
        </div>

        <div className="signup-checkbox-container">
          <input type="checkbox" id="remember-signup" />
          <label htmlFor="remember-signup">Keep me logged in</label>
        </div>

        <div className="signup-submit-container">
          <button className="signup-submit-btn">Sign Up</button>
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
}

export default Signup;