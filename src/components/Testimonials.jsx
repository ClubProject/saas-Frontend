import '../styles/Testimonial.css';

function Testimonial() {

  const TestimonialData = [{
    name: "- John Doe",
    comment: "I love this app! It's so easy to use and the customer support is amazing.",
    image: "src/assets/testis1.png"
  },
  {
    name: "- Jane Smith", 
    comment: "I've been using this app for a while now and it's been a game changer for my business. The features are incredible and the pricing is unbeatable.",
    image: "src/assets/testis2.png"
  },
  {
    name: "- Bob Johnson",
    comment: "This app has saved me so much time and effort. I can't imagine running my business without it.", 
    image: "src/assets/testis3.png"
  },
  {
    name: "- Emily Davis",
    comment: "I've been using this app for a while now and it's been a game changer for my business. The features are incredible and the pricing is unbeatable.",
    image: "src/assets/testis4.png"
  }];

  return (
    <div className="Testimonial-container">
      <p className="What-they-say">
        What Our Users Say
      </p>
      <div className="Testimonial-grid">
        {TestimonialData.map((testimonial, index)=>(
          <div className="Testimonial-card" key={index}>
            <img src={testimonial.image} className="Testimonial-image"/>
            <p className = "Testimonial-comment">{testimonial.comment}</p>
            <p className="Testimonial-name">{testimonial.name}</p>
          </div>
        
        ))}
      </div>
        
    </div>
  );
}
export default Testimonial;