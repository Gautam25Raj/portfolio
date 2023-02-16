import './SkillsBar.css';

const SkillsBar = (props) => {
  return (
    <div className="skills-item">
      <p className="paragraph skills-name cursor-default">{props.name}</p>
      <div className="skills-bar">
        <span
          className="skills-fill absolute-center transition-base"
          style={{ width: props.fill }}
        ></span>
      </div>
    </div>
  );
};

export default SkillsBar;
