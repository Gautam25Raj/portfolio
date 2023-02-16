import Tilt from 'react-parallax-tilt';

import './ProjectImage.css';

import hazy from './../../Assests/Images/hazy.jpg';

const ProjectImage = (props) => {
  const visitSiteImage = () => {
    window.location.href = props.visit;
  };

  return (
    <div
      tabindex="0"
      role="button"
      onClick={visitSiteImage}
      className={'project-image-container-' + props.evenOdd}
    >
      <Tilt tiltMaxAngleX="8" tiltMaxAngleY="5">
        <div className={'project-image-container'}>
          <div className="project-images">
            <img src={props.img} alt="" className="img-abs project-image" />
            <img src={hazy} alt="" className="img-abs hazy-img" />
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default ProjectImage;
