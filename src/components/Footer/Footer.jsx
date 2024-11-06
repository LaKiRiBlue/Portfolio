import './Footer.css';

// Import social media icons (update paths to your actual images)
import InstagramIcon from '../../assets/icons/square-instagram-brands-solid.svg';
import FacebookIcon from '../../assets/icons/square-facebook-brands-solid.svg';
import LinkedIn from '../../assets/icons/linkedin-brands-solid.svg';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Media Icons */}
        <div className="social-media">
  <a href="https://www.instagram.com/kiri_karma/" target="_blank" rel="noopener noreferrer">
    <img src={InstagramIcon} alt="Instagram" />
  </a>
  <a href="https://www.facebook.com/lakiri" target="_blank" rel="noopener noreferrer">
    <img src={FacebookIcon} alt="Facebook" />
  </a>
  <a href="https://www.linkedin.com/in/zuzana-droppova/" target="_blank" rel="noopener noreferrer">
    <img src={LinkedIn} alt="LinkedIn" />
  </a>
</div>


        {/* Contact Information */}
        <div className="contact-info">
          <p><i className="location-icon"></i> BE, Brussels</p>
          <p><i className="email-icon"></i> <a href="mailto:lakiri@gmail.com">lakiri@gmail.com</a></p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Contact <span>us</span></h3>
          <p>Let&apos;s get in touch!</p>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" required></textarea>

            <div className="newsletter">
              <input type="checkbox" id="newsletter" name="newsletter" />
              <label htmlFor="newsletter">I would like to receive the newsletter.</label>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
