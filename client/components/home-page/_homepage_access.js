import React from 'react';
import { Apple, GoogleStore } from '../../Icons';
const HomePageAccess = () => {
  return (
    <div className="homepage_access">
      <div className="homepage_access--text">
        <p className="homepage_access--text-title">
          Manage smarter,
          <br />
          from anywhere
        </p>
        <p className="homepage_access--text-info">DOWNLOAD OUR APP s</p>
        {/* <p className="homepage_access--text-instru">
          For Apple Download The IPA file directly to your Apple device.
        </p> */}
        <div className="homepage_access--text-download">
          <div>
            <GoogleStore />
            <p>Google Play</p>
          </div>
          <div>
            <Apple />
            <p>App Store</p>
          </div>
        </div>
      </div>
      <div className="homepage_access--image">
        <img src="images/white.png" />
      </div>
    </div>
  );
};

export default HomePageAccess;

// XL lets you manage your real estate investments from the comfor of
// your sofa or on the go. Managing overseas property investments has
// never been this easy!
