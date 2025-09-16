import "../styles/ContactUs.css";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import address from "../assets/location.png";
import phone from "../assets/phone.png";
import email from "../assets/mail.png";


function ContactUs() {

  const formitem = [
    { id: 1, name: "Name", type: "text", placeholder: "Enter your name" },
    { id: 2, name: "Email", type: "email", placeholder: "Enter your email" },
    { id: 3, name: "Message", type: "text", placeholder: "Enter your message" }
  ];

  const addressitem = [
    { id: 1, type: "Address", value: "123 Main St, City, Country", img: address },
    { id: 2, type: "Phone", value: "+1 234 567 890", img: phone },
    { id: 3, type: "Email", value: "info@example.com", img: email }
  ];

  const mediaLinks = [
    { id: 1, platform: "Facebook", url: "https://www.facebook.com", img: facebook },
    { id: 2, platform: "Instagram", url: "https://www.instagram.com", img: instagram },
    { id: 3, platform: "LinkedIn", url: "https://www.linkedin.com", img: linkedin },
    { id: 4, platform: "Twitter", url: "https://www.twitter.com", img: twitter },
    { id: 5, platform: "GitHub", url: "https://www.github.com", img: github }
  ];
  return (
    <div className="contact-us-container">
      <p className="contact-us-text">Contact Us</p>
      <div className="contact-us-grid">
        <div className="left-card">
          <p className = "send"><strong>Send us a Message</strong></p>
          <form className="contact-form">
            {
              formitem.map((item)=>
                <div key = {item.id} className="form-item">
                  <div className = "label-name"><label><strong>{item.name}</strong></label><br/></div>
                  <input
                    type={item.type}
                    id={item.name}
                    placeholder={item.placeholder}
                  />
                </div>
            )
            }
            <button type="submit" className="submit-button"><strong>Send your message</strong></button>

          </form>   
        </div>

        <div className="right-card">
          <div className = "address-card">
            <p className = "address-title"><strong>Our Contact Information</strong></p>
            {addressitem.map((item)=>
              <div key = {item.id} className = "address-item">
                <img src={item.img} alt={item.type} className="address-icon" />
                <p className = "address-text">{item.value}</p>
              </div>
            )}
          </div>

          <div className = "media-link-card">
            <p className = "media-link-title"><strong>Follow us on Social Media</strong></p>
            <div className="nig">
              {mediaLinks.map((link) => (
                <div key={link.id} className="media-link-item">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <img
                    src={link.img}
                    alt={link.platform}
                    className="media-link-icon"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      

    </div>
  );
}
export default ContactUs;
