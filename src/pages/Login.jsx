import logo from '../assets/logo.png';
import '../styles/Login.css';  
import { Link } from 'react-router';

const Login = () => {
  return (
    <>
      <div className="login-logo-wrapper">
        <img src={logo} alt="MentorHub" className="login-logo" />
      </div>

      <div className="login-container">
        <div className="login-header">
          <div className="login-header-text">WELCOME!</div>
        </div>

        <div className="login-inputs">
          <div className="login-input">
            <label className="login-label">Email</label>
            <input type="email" className="login-ip" placeholder="Your Email" />
          </div>

          <div className="login-input">
            <label className="login-label">Password</label>
            <input type="password" className="login-ip" placeholder="Password" />
          </div>

          <div className="login-checkbox-container">
            <input type="checkbox" id="remember-login" />
            <label htmlFor="remember-login">Keep me logged in</label>
          </div>

          <div className="login-forgot">
            <a href="#">Forgot Password?</a>
          </div>

          <div className="login-submit-container">
            <button className="login-btn">Login</button>
            <p>Don't have an account yet?</p>
            <Link to="/signup">Create an account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;