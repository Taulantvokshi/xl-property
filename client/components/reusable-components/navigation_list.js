import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationList = ({ links }) => {
  let location = useLocation();
  const [getLocation, setLocation] = useState('');
  useEffect(() => {}, [location]);

  console.log(location.pathname);
  return (
    <div className="navigation">
      {Object.entries(links).map(([link, linkName]) => {
        return (
          <Link
            style={{
              backgroundColor: location.pathname === link ? '#f4f4f4' : '',
            }}
            className="navigation-links"
            to={link}
            key={link}
          >
            {linkName}
          </Link>
        );
      })}
    </div>
  );
};

export default NavigationList;
