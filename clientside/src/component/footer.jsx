import React from "react";
import '../styles/footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-container">
    <div>
      <h2>Yummy Now</h2>
      <p>Delicious meals delivered fast to your door. Order now and enjoy!</p>
    </div>

    <div>
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Offers</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    <div className="contact">
      <h3>Contact Us</h3>
      <p><FaPhoneAlt /> +91 98765 43210</p>
      <p><FaEnvelope /> support@YummyNow.com</p>
    </div>

    <div>
      <h3>Follow Us</h3>
      <div className="socials">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    © {new Date().getFullYear()} YummyNow. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
