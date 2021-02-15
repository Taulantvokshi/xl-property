import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomePageCarosel = () => (
  <div className="homepage_carosel--slider">
    <Carousel
      transitionTime={1000}
      autoPlay
      showThumbs={false}
      showIndicators={true}
      interval={8000}
      infiniteLoop
      showArrows={false}
      showStatus={false}
    >
      <div className="homepage_carosel--slider-testimonials">
        XL Real Property Management exhibits all of the characteristics of a
        great landlord, which seem to be non-existent among other property
        managers in New York. XL RPM is incredibly reliable and responsive. For
        example, a pipe above our apartment burst, causing the ceiling to
        cave-in. Despite this occurring on a Saturday, the XL RPM team worked
        around the clock to make sure repairs were completed in a timely manner.
        Dylan, the CEO, personally dropped by Saturday night to make sure we
        were OK and coordinate repairs with the plumber & contractor. I can
        confidently say that XL Real Property Management has exceeded all of my
        expectations as a tenant and is easily the best landlord I’ve ever had.
        <br />
        <br />
        Robert Michaels NYC April 2016
      </div>

      <div className="homepage_carosel--slider-testimonials">
        XL Real Property Management exhibits all of the characteristics of a
        great landlord, which seem to be non-existent among other property
        managers in New York. XL RPM is incredibly reliable and responsive. For
        example, a pipe above our apartment burst, causing the ceiling to
        cave-in. Despite this occurring on a Saturday, the XL RPM team worked
        around the clock to make sure repairs were completed in a timely manner.
        Dylan, the CEO, personally dropped by Saturday night to make sure we
        were OK and coordinate repairs with the plumber & contractor. I can
        confidently say that XL Real Property Management has exceeded all of my
        expectations as a tenant and is easily the best landlord I’ve ever had.
        <br />
        <br />
        Robert Michaels NYC April 2016
      </div>
    </Carousel>
  </div>
);

export default HomePageCarosel;
