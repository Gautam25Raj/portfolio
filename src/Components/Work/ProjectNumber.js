import './ProjectNumber.css';

const ProjectNumber = (props) => {
  return (
    <div
      className={'project-number heading-color project-number-' + props.evenOdd}
    >
      <span className="project-number-num on-hover">{'0' + props.number}</span>
      <span>{'/0' + props.length}</span>
    </div>
  );
};

export default ProjectNumber;
