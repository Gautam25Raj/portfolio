import ProjectHeading from './ProjectHeading';
import ProjectRoles from './ProjectRoles';
import VisitSite from './VisitSite';

import './ProjectDetails.css';

const ProjectDetails = (props) => {
  return (
    <div className={'work-details work-details-' + props.evenOdd}>
      <ProjectHeading capital={props.capital} title={props.title} />

      <ProjectRoles role={props.role} release={props.release} />

      <VisitSite visit={props.visit} />
    </div>
  );
};

export default ProjectDetails;
