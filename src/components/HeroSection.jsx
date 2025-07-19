import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <>
      <hero className = "hero-container">
        <p className = "hero-text">
          Unlock Your Potential <br />
          with Expert Mentorship
        </p>
      </hero>
      <div>
      <p className = "hero-subtext">
          Connect with experienced professionals, gain valuable insights, <br />
          and accelerate your personal and career growth.
        </p>
      </div>

      <div className = "hero-button-container">
        <button className = "find-your-mentor-button">
          <p className = "find-your-mentor-text">Find Your Mentor</p>
        </button>
        <button className = "become-a-mentor-button">
          <p className = "become-a-mentor-text">
            Become a Mentor
          </p>
        </button>
      </div>
    </>
  );
}

export default HeroSection;