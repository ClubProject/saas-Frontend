import '../styles/Navbar.css';
import {Link} from 'react-router'

function Navbar(){
  return (
    <nav className="navbar">
      <div className="logo">
        <img className = "mentorhub-logo" src="src/assets/Mentorhub.png" alt="Mentorhub Logo"></img>
      </div>
      <ul className="nav-links">
        <li><a href="#home"><p className='home'>Home</p></a></li>
        <li><a href="#courses"><p className='courses'>Courses</p></a></li>
        <li><a href="#about"><p className='about'>About</p></a></li>
        <li><a href="#contact"><p className='contact'>Contact</p></a></li>
      </ul>
      <div className="auth-buttons">
        <Link to={'/login'}><button className="login-button">Login</button></Link>
        <Link to={'/signup'}><button className="signup-button">Sign Up</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;