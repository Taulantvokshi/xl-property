import React from 'react';
import { Twitter, Facebook, Youtube, Instagram, Linkedin } from '../Icons';
import './footer.scss';
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer_links">
        <div className="footer_links--group">
          <p>About Us</p>
          <p>Why XL</p>
          <p>Our Presence</p>
          <p>Management Team</p>
          <p>Testimonials</p>
        </div>
        <div className="footer_links--group">
          <p>FAQ</p>
          <p>Press</p>
          <p>Services</p>
          <p>Individual Apartments & Townhomes</p>
          <p>Pied-à-terre</p>
        </div>
        <div className="footer_links--group">
          <p>Residents</p>
          <p>Pay Rent Online</p>
          <p>Work Order Form</p>
          <p>Notice to Vacate Form</p>
          <p>Rental Package Download</p>
        </div>
        <div className="footer_links--group right-margin">
          <p>Owners</p>
          <p>Login</p>
          <p>Contact Us</p>
          <br />
          <p />
          <p>Read Our Reviews On Google</p>
        </div>
      </div>
      <div className="footer_media">
        <div className="footer_media--icons">
          <Twitter />
          <Facebook />
          <Instagram />
          <Youtube />
          <Linkedin />
        </div>
        <div className="footer_media--text">
          XL Real Property Management LLC
        </div>
        <div className="footer_media--text">
          555 Madison Avenue 5th Floor.New York, NY 10022
        </div>
        <div className="footer_media--contact">
          <p>T: 212-203-8684</p>
          <p>F: 646-417-5775</p>
          <p>E: info@xl-rpm.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
