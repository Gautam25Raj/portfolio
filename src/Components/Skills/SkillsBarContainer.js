import SkillsBar from './SkillsBar';

import './SkillsBar.css';

const SkillsBars = () => {
  const skills = [
    {
      skillName: 'Front-end',
      fill: '80%',
    },
    {
      skillName: 'Back-end',
      fill: '60%',
    },
    {
      skillName: 'ReactJS',
      fill: '50%',
    },
    {
      skillName: 'Java',
      fill: '50%',
    },
  ];

  return (
    <section className="skills-container">
      {skills.map((skill) => (
        <SkillsBar
          key={skill.skillName}
          name={skill.skillName}
          fill={skill.fill}
        />
      ))}
    </section>
  );
};

export default SkillsBars;
