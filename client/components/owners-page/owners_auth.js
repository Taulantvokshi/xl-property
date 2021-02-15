import React, { useEffect } from 'react';

const OwnersAuth = () => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    gsap.timeline().to('.owners-auth', {
      x: 0,
      opacity: 0.8,
      ease: 'power1.out',
    });
  }, []);
  return (
    <div className="owners-auth">
      <div className="owners-auth-title">OWNER LOG IN</div>
      <div className="owners-auth_input">
        <input placeholder="USERNAME" type="text" />
      </div>
      <div className="owners-auth_input">
        <input placeholder="PASSWORD" type="text" />
      </div>
      <div className="owners-auth_button">Submit</div>
    </div>
  );
};

export default OwnersAuth;
