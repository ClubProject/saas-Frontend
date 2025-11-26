import '../styles/KeyFeatures.css';

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const KeyFeatures = () => {
  return (
    <div className="features-container">
      <h2>Key Features of MentorHub<br /><br /></h2>
      <div className="grid">
        <FeatureCard
          icon = <img src="src/assets/feature1.png" alt="MentorHub Logo" />
          title="Smart Matching"
          description="Our advanced algorithm connects you with the perfect mentor or mentee based on your unique needs and goals."
        />
        <FeatureCard
          icon = <img src="src/assets/feature2.png" alt="MentorHub Logo" />
          title="Secure Messaging"
          description="Communicate safely and privately with your mentor or mentee through our integrated messaging system."
        />
        <FeatureCard
          icon = <img src="src/assets/feature3.png" alt="MentorHub Logo" />
          title="Flexible Scheduling"
          description="Easily arrange meetings and sessions with built-in scheduling tools that adapt to your availability."
        />
        <FeatureCard
          icon = <img src="src/assets/feature4.png" alt="MentorHub Logo" />
          title="Resource Library"
          description="Access a curated collection of articles, guides, and tools to support your learning and development."
        />
      </div>
    </div>
  );
};

export default KeyFeatures;