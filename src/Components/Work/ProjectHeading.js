import Elements from '../Elements';
import TextSpan from '../TextSpan';

import './ProjectHeading.css';

const ProjectHeading = (props) => {
  return (
    <div className="work-heading">
      <Elements name="h3" />

      <h3 className="heading heading-color heading-h3-size">
        <TextSpan text={props.capital} className="hover-bounce on-hover" />
        <TextSpan text={props.title} className="hover-bounce" />
      </h3>

      <Elements name="/h3" />
    </div>
  );
};

export default ProjectHeading;
