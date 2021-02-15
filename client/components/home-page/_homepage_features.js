import React from 'react';
import {
  Metro,
  NewYorkTimes,
  Forbs,
  Bloomberg,
  RealEstate,
  NewYork,
  Amny,
  BrickUnderground,
} from '../../Icons';
const HomepageFeatures = () => {
  return (
    <div className="homepage_features">
      <div className="homepage_features--item">
        <NewYorkTimes width="150px" />
      </div>
      <div className="homepage_features--item">
        <Bloomberg width="100px" />
      </div>
      <div className="homepage_features--item">
        <Metro />
      </div>
      <div className="homepage_features--item">
        <Forbs />
      </div>
      <div className="homepage_features--item">
        <RealEstate width="200px" />
      </div>
      <div className="homepage_features--item">
        <NewYork width="100px" />
      </div>
      <div className="homepage_features--item">
        <Amny />
      </div>
      <div className="homepage_features--item">
        <BrickUnderground width="150px" />
      </div>
    </div>
  );
};

export default HomepageFeatures;
