import '../styles/AboutUs.css';

function AboutUs() {
  const steps =[
    { 
      message: 
      <div>
        <p>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Nam efficitur sit amet nisl id mattis.
        Integer enim erat, sodales id ipsum vitae, 
        vestibulum hendrerit tellus.
        </p>
      </div> 
    },
    { 
      message: 
      <div>
        <p>
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. 
          Nam efficitur sit amet nisl id mattis.
          Integer enim erat, sodales id ipsum vitae, 
          vestibulum hendrerit tellus.
        </p>
      </div> 
    },
  ]



  return(
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-text">
        We are a dedicated team of professionals committed to connecting mentors and mentees. 
        Our platform aims to foster personal and professional growth through meaningful mentorship 
        relationships. Whether you are looking to share your expertise or seeking guidance, our 
        community is here to support you every step of the way.
      </p>
      <div className="about-us-grid">
        {steps.map((step, index) => (
          <div className="about-us-card" key={index}>
            <p className="about-us-message">{step.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;