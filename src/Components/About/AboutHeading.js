import Elements from '../Elements';
import TextSpan from '../TextSpan';

import './AboutHeading.css';

const AboutHeading = () => {
  return (
    <div className="about-heading">
      <Elements name="h2" />
      <h2 className="heading heading-h2-size heading-color">
        <TextSpan text="What's " className="on-hover" />
        <TextSpan text="up, I'm Gautam" />
      </h2>
      <Elements name="/h2" />
    </div>
  );
};

export default AboutHeading;
