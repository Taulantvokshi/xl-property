import React, { Suspense } from 'react';
import { NavigationList, OurPresence } from '../../exports';
import './index.scss';
import { Route } from 'react-router-dom';
const About = () => {
  const aboutLinks = {
    '/about-us/how-we-work': 'How We Work',
    '/about-us/our-portfolio': 'Our Presence',
    '/about-us/management-team': 'Management Team',
    '/about-us/about-ustestimonials': 'Testimonials',
    '/about-us/faq': 'faq',
    '/about-us/blog': 'blog',
    '/about-us/press': 'press',
  };

  return (
    <div className="about-page">
      <div className="about-page_links">
        <NavigationList links={aboutLinks} />
      </div>

      <Route path="/about-us/our-portfolio/" component={OurPresence} />
    </div>
  );
};

export default About;
