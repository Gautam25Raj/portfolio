import './Logo.css';

import gr from './../../Assests/SVG/GR.svg';

const Logo = () => {
  return (
    <div className="logo back-shadow height-border">
      <img src={gr} alt="" className="gr" />

      <ul className="logo-list-container">
        <li className="logo-list cursor-default">Web Developer</li>
        {/* <li className="logo-list cursor-default">UI UX Designer</li>
        <li className="logo-list cursor-default">Software Engineer</li> */}
      </ul>
    </div>
  );
};

export default Logo;
