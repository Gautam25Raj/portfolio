import { useState } from 'react';

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
    zIndex: isHover ? 1 : 3,
  };

  const webStyleBack = {
    color: isHover ? 'rgba(250, 250, 250, 0)' : 'rgba(250, 250, 250, 1)',
  };

  const uiuxStyle = {
    color: 'rgba(250, 250, 250, 0)',
    zIndex: isHover ? 3 : 1,
  };

  const uiuxStyleBack = {
    color: isHover ? 'rgba(250, 250, 250, 1)' : 'rgba(250, 250, 250, 0)',
  };

  return (
    <h1 className="heading-h1-container">
      <div className="heading-h1-box">
        <div className="heading-h1 heading-web" style={webStyle}>
          Web Developer
        </div>

        <div className="heading-h1-back heading-web-back" style={webStyleBack}>
          Web Developer
        </div>
      </div>

      <div className="abs"></div>

      <div className="heading-h1-box">
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
  );
};

export default HeaderHeading;
