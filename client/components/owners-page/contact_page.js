import React, { useEffect } from 'react';
import './contact-page.scss';

const ContactPage = () => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    gsap.timeline().to('.contact-page-container', {
      x: 0,
      opacity: 0.8,
      ease: 'power1.out',
    });
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-page-container">
        <div className="contact-page-container_form">
          <div className="contact-page-container_form-title">CONTACT US</div>
          <div className="single_input">
            <input placeholder="First Name" />
          </div>

          <div className="duble_input">
            <input placeholder="E-mail" />
            <input placeholder="Phone (Optional)" />
          </div>
          <div className="single_input">
            <input placeholder="What is this Regarding?" />
          </div>
          <textarea
            placeholder="Message"
            rows="7"
            className="contacts_areatext"
          />
          <div className="owners-auth_button">Submit</div>
        </div>
        <div className="contact-page-container_text">
          <div className="contact-page--title">
            <p className="contact-page--title--main">
              XL Real Property Management LLC
            </p>
            <p>555 Madison Avenue. 5th Floor</p>
            <p>New York, NY 10022</p>
          </div>

          <div className="contact-page--rest">
            <p>Phone: 212-203-8684</p>
            <p>Fax: 646-417-5775</p>
            <p>Email: info@xl-rpm.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
