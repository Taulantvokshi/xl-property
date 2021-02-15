/* eslint-disable complexity */
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './mobile_navbar.scss';
const MobileNav = ({ onlineUser }) => {
  const input = useRef();

  const [clicked, setClicked] = useState(false);
  const container = {
    opacity: clicked ? '1' : '0',
    visibility: clicked ? 'visible' : 'hidden',
    width: clicked ? '100%' : '0',
  };
  const background = {
    transform: clicked ? 'scale(200)' : 'scale(1)',
    visibility: clicked ? 'visible' : 'hidden',
  };
  const list = {
    opacity: clicked ? '1' : '0',
  };

  const handleClick = () => {
    input.current.click();
    setClicked((prew) => !prew);
  };

  return (
    <div className="m_nav">
      <input ref={input} className="m_nav_checkbox" type="checkbox" />
      <div onClick={handleClick} className="m_nav_button">
        <span className="m_nav_button-icon" />
      </div>

      <div style={background} className="m_nav_background" />
      <div style={container} className="m_nav_container">
        <div style={list} className="m_nav_container-list">
          <Link
            onClick={handleClick}
            to={onlineUser ? '/account' : '/signin'}
            className="m_nav_container-list-li"
          >
            SERVICES
          </Link>
          <Link
            onClick={handleClick}
            to="/"
            className="m_nav_container-list-li"
          >
            RESIDENTS
          </Link>
          <Link
            onClick={handleClick}
            to="/about"
            className="m_nav_container-list-li"
          >
            OWNERS
          </Link>

          <Link
            onClick={handleClick}
            to="#"
            className="m_nav_container-list-li"
          >
            ABOUT US
          </Link>
          <Link
            onClick={handleClick}
            to={onlineUser ? '/#' : '/#'}
            className="upload-l m_nav_container-list-li"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
