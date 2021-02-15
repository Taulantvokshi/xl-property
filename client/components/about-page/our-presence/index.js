import React, { Suspense, lazy, useState } from 'react';
import './our-presence.scss';
const Map = lazy(() => import('./map'));
import { Locations } from '../../../exports';
import locationData from '../../data/locations.json';
const OurPresence = () => {
  const [getLocation, setLocation] = useState(locationData);

  const flterdPins = (d) => {
    setLocation(d);
  };
  return (
    <div className="ourPresence">
      <Locations filter={flterdPins} data={locationData} />
      <Map data={getLocation} />
    </div>
  );
};

export default OurPresence;
