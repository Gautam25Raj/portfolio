import Elements from '../Elements';
import './ProjectRoles.css';

const ProjectRoles = (props) => {
  return (
    <section className="work-role-section">
      <Elements name="section" />

      <div className="work-role-release">
        <div className="justify-between work-role-container">
          <h4 className="heading-color work-heading work-role">Role</h4>
          <p className="heading-color work-value work-role-value">
            {props.role}
          </p>
        </div>

        <div className="justify-between heading-color work-release-container">
          <h4 className="heading-color work-heading work-release">Release</h4>
          <p className="heading-color work-value work-release-value">
            {props.release}
          </p>
        </div>
      </div>

      <Elements name="/section" />
    </section>
  );
};

export default ProjectRoles;
