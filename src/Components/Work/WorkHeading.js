import TextSpan from '../TextSpan';

import './WorkHeading.css';

const WorkHeading = () => {
  return (
    <h2 className="heading-color work-main-heading">
      <TextSpan text="W" className="on-hover hover-bounce" />
      <TextSpan text="ORK" className="hover-bounce" />
    </h2>
  );
};

export default WorkHeading;
