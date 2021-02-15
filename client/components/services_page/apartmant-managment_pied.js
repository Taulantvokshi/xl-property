/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { AptServiceMapper, AptManagementIndividual } from '../../exports';
import { piedData, piedAptTexts } from '../data/pied-apartments';
const ApartmentManagementPied = () => {
  useEffect(() => {
    gsap
      .timeline()
      .to('.apt-service-2', { height: '498px' })
      .to('.apt-service-1-items', { x: 0, stagger: 0.04, opacity: 1 })
      .to('.apt-service-4', { x: 0, stagger: 0.1, opacity: 1 }, '-=1')
      .to('.apt-service-3', { opacity: 1 });
  }, []);

  return (
    <div className="apartmentManagement">
      <AptManagementIndividual data={piedData} />
      <AptServiceMapper data={piedAptTexts} />
    </div>
  );
};

export default ApartmentManagementPied;
