import React, { useRef } from 'react';
import { ResizeObserverHook, MobileNav } from '../exports';
import { Link } from 'react-router-dom';
import './header.scss';
const DesktopNav = () => {
  return (
    <nav className="header_nav">
      <Link to="/about-us" className="header_nav-items">
        ABOUT US
      </Link>
      <Link to="/services/apartment-management/" className="header_nav-items">
        SERVICES
      </Link>
      <div className="header_nav-items">RESIDENTS</div>
      <Link to="/owners" className="header_nav-items">
        OWNERS
      </Link>
      <Link to="/contacts" className="header_nav-items">
        CONTACT US
      </Link>
    </nav>
  );
};

const Header = () => {
  const navbarRef = useRef();
  const dimensions = ResizeObserverHook(navbarRef);
  return (
    <section ref={navbarRef} className="header">
      <div className="header_logo">
        <div className="header_logo-container">
          <img src="images/XLLogoBlack.svg" />
        </div>
      </div>
      {dimensions && dimensions.width < 625 ? <MobileNav /> : <DesktopNav />}
    </section>
  );
};

export default Header;
