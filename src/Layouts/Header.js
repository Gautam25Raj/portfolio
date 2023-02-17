import HeaderHeading from '../Components/Home/HeaderHedning';
import Logo from '../Components/Home/Logo';
import Nav from '../Components/Home/Nav';
import Social from '../Components/Home/Social';
import HeroImage from '../Components/Home/HeroImage';

import './Header.css';

import sDown from './../Assests/SVG/scroll-down.svg';
import ellipse from './../Assests/Images/ellipse.png';
import { useState } from 'react';

const Header = () => {
  const [headerMousePositon, setHeaderMousePostion] = useState(
    'translate(0px, 0px)'
  );

  const defaultImagePosition = () => {
    setHeaderMousePostion(`translate(0px, 0px)`);
  };

  const imagePosition = (e) => {
    let x = e.pageX;
    let y = e.pageY;

    setHeaderMousePostion(`translate(${x * 0.01 + 'px,' + y * 0.01 + 'px'})`);
  };

  return (
    <header onMouseMove={imagePosition} onMouseLeave={defaultImagePosition}>
      <span
        className="element span-block no-select"
        style={{ transform: 'translateX(0)', margin: '0 0 2px 0' }}
      >
        &lt;body&gt;
      </span>

      <section className="navigation">
        <Logo />
        <Nav />
        <Social />
      </section>

      <section className="grid header-container">
        <HeaderHeading />
        <p className="location">based in Patna, India</p>
        <div className="scroll-down-svg">
          <img src={sDown} alt="" />
        </div>
      </section>

      <HeroImage design={headerMousePositon} />

      {/* <div className="hero-img">
        <img
          src={hero}
          alt="Gautam"
          className="hero-img-img"
          style={{ transform: headerMousePositon }}
        />
      </div> */}

      <div className="ellipse">
        <img src={ellipse} alt="" />
      </div>
    </header>
  );
};

export default Header;
