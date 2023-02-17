import { useState } from 'react';

import Elements from './../Elements';

import './HeaderHeading.css';

const HeaderHeading = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const webStyle = {
    color: isHover ? 'rgba(250, 250, 250, 0)' : 'rgba(250, 250, 250, .6)',
    zIndex: isHover ? 2 : 4,
    WebkitTextStroke: isHover ? '0' : '3px #a3cfcd',
  };

  const webStyleBack = {
    color: isHover ? 'rgba(250, 250, 250, 0)' : 'rgba(250, 250, 250, 1)',
  };

  const uiuxStyle = {
    color: isHover ? 'rgba(250, 250, 250, .3)' : 'rgba(250, 250, 250, 0)',
    zIndex: 4,
    WebkitTextStroke: isHover ? '3px #a3cfcd' : '0',
  };

  const uiuxStyleBack = {
    color: isHover ? 'rgba(250, 250, 250, 1)' : 'rgba(250, 250, 250, 0)',
  };

  return (
    <div className="header">
      <Elements name="h1" />
      <h1 className="heading-h1-container">
        <div className="heading-h1-box heading-h1-box-web">
          <div className="heading-h1 heading-web" style={webStyle}>
            Web Developer
          </div>

          <div
            className="heading-h1-back heading-web-back"
            style={webStyleBack}
          >
            Web Developer
          </div>
        </div>

        <div className="heading-h1-box heading-h1-box-uiux">
          <div
            className="heading-h1 heading-uiux"
            style={uiuxStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            UI/UX Designer
          </div>

          <div
            className="heading-h1-back heading-uiux-back"
            style={uiuxStyleBack}
          >
            UI/UX Designer
          </div>
        </div>
      </h1>
      <Elements name="/h1" />
    </div>
  );
};

export default HeaderHeading;
