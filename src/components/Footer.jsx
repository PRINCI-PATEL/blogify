import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="footer">
        <div className="footer-content">
          {/* Brand / About Section */}
          <div className="footer-section">
            <h3>Blogify</h3>
            <p>
              Blogify ek modern blogging platform hai jahan aap apne ideas,
              stories aur knowledge easily share kar sakte ho. Hamara mission
              hai creativity ko inspire karna aur writers ko ek engaging
              platform provide karna.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 style={{ marginLeft: "120px" }}>Quick Links</h4>
            <ul style={{marginLeft: "80px"}}>
              <li>
                <a href="#home">🏠 Home</a>
              </li>
              <li>
                <a href="#about">ℹ️ About</a>
              </li>
              <li>
                <a href="#features">📝 Blog</a>
              </li>
              <li>
                <a href="#contact">📩 Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>📧 email@example.com</p>
            <p>📞 +1 (123) 456-7890</p>
            <p>📍 123 Blogify Street, New Delhi, India</p>
          </div>

          {/* Map Section */}
          <div className="footer-section map-section">
            <h4>Find Us</h4>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83926146017!2d77.0688982!3d28.527582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a98927f3d9%3A0xa5a79db3e6a2f!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1709630900000"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Footer Bottom */}
      </footer>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Blogify. All rights reserved. | Made
          with ❤️ in React
        </p>
      </div>
    </>
  );
};

export default Footer;
