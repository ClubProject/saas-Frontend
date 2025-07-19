import "../styles/HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Create Your Profile",
      description:
        "Tell us about your goals, interests, and what you're looking for in a mentor or mentee.",
    },
    {
      number: 2,
      title: "Discover Matches",
      description:
        "Our smart matching algorithm connects you with ideal mentors or mentees based on compatibility.",
    },
    {
      number: 3,
      title: "Start Your Journey",
      description:
        "Begin your mentorship relationship with secure messaging and scheduling tools.",
    },
  ];

  return (
    <section className="howitworks-container">
      <h2 className="howitworks-title">How MentorHub Works?</h2>
      <div className="howitworks-steps">
        {steps.map((step, index) => (
          <div className="howitworks-card" key={index}>
            <div className="howitworks-number">{step.number}</div>
            <h3 className="howitworks-card-title">{step.title}</h3>
            <p className="howitworks-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
