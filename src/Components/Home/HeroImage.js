import './HeroImage.css';

import hero from './../../Assests/Images/gautam.png';

const HeroImage = (props) => {
  const a = 5;
  return (
    <div className="hero-img">
      <img
        src={hero}
        alt="Gautam"
        className="hero-img-img"
        style={{ transform: props.design }}
      />
    </div>
  );
};

export default HeroImage;
