import React from 'react';

import './homepage.scss';
import {
  HomePageCarosel,
  HomepageFeatures,
  HomePageAccess,
} from '../../exports';
const HomePage = () => (
  <div className="homepage">
    <div
      className="homepage_image rellax"
      data-rellax-speed="-1"
      data-rellax-percentage="1"
    >
      <img src="images/main-pic.jpg" />
      <div className="homepage_image--headerText">
        Your Property, Our Priority
      </div>
      <div className="homepage_image--paragraph">
        Protecting Your Real Estate Investment,
        <br />
        While Maximizing Its Potential.
      </div>
    </div>
    <div className="homepage_carosel">
      <div className="homepage_carosel--text">
        <p>
          “reliable and <br /> responsive”
        </p>
      </div>
      <HomePageCarosel />
    </div>
    <HomepageFeatures />
    <div className="homepage_apartment">
      <img src="images/manhattan-apartment.jpg" />
    </div>
    <HomePageAccess />
  </div>
);

export default HomePage;
