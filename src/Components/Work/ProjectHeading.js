import TextSpan from '../TextSpan';

import './ProjectHeading.css';

const ProjectHeading = (props) => {
  return (
    <div className="work-heading">
      <span className="element span-block">&lt;h3&gt;</span>

      <h3 className="heading heading-color heading-h3-size">
        <TextSpan text={props.title} className="hover-bounce" />
      </h3>

      <span className="element span-block">&lt;h3&gt;</span>
    </div>
  );
};

export default ProjectHeading;
