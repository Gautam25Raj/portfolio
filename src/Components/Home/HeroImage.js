import './HeroImage.css';

import hero from './../../Assests/Images/gautam.png';

const HeroImage = () => {
  return (
    <div className="hero-img">
      <img src={hero} alt="Gautam" />
    </div>
  );
};

export default HeroImage;
