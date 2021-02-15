/* eslint-disable no-undef */
import React, { useEffect, useRef } from 'react';

const AptServiceMapper = ({ data }) => {
  const texts = useRef();
  useEffect(() => {
    for (let i = 0; i < texts.current.children.length; i++) {
      const current = texts.current.children[i];
      const className = current.className.split(' ')[1];

      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.${className}`,

            start: 'top 80%',
            end: 'bottom 80%',

            //   scrub: true,
            //events     //onEnter onLeave onEterBack onLeaveBack
            toggleActions: 'play none none none',
            //options play, pause, resume,reset, restart, complete, reverse, none
          },
        })
        .to(`.${className}`, { opacity: 1, duration: 0.4, x: 0 });
    }
  }, []);

  return (
    <div ref={texts} className="apartmentManagement-second">
      {data.map((item, index) => {
        return (
          <div
            key={Math.random()}
            className={`apartmentManagement-second-text second-text-${
              index + 1
            }`}
          >
            <p className="apartmentManagement-second-text--title">
              {item.title}
            </p>

            <p className="apartmentManagement-second-text--italic">
              {item.italic}
            </p>
            <p className="apartmentManagement-second-text--par">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AptServiceMapper;
