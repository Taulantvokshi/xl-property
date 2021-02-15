import React from 'react';
import './index.scss';
import './apartment-management.scss';
import {
  NavigationList,
  ApartmentManagement,
  ApartmentManagementPied,
} from '../../exports';
import { Route } from 'react-router-dom';

const aboutLinks = {
  '/services/apartment-management/': 'Individual Apartments and Townhomes',
  '/services/pied-a-terre': 'Pied-à-terre',
};
const Services = () => {
  return (
    <div className="services-page">
      <div className="services-page_links">
        <NavigationList links={aboutLinks} />
      </div>

      <Route
        path="/services/apartment-management/"
        component={ApartmentManagement}
      />

      <Route
        path="/services/pied-a-terre/"
        component={ApartmentManagementPied}
      />
    </div>
  );
};

export default Services;
