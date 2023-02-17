import TextShpereData from '../Components/Skills/TextSphereData';
import SkillsBarContainer from '../Components/Skills/SkillsBarContainer';
import SkillsExperience from '../Components/Skills/SkillsExperiense';

import './Skills.css';

import cat from './../Assests/SVG/dark-cat.svg';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <section className="skills-container grid">
        <SkillsExperience />

        <div className="skills-barcat-container">
          <div className="cat">
            <img src={cat} alt="Cat stting on Desk" />
          </div>

          <SkillsBarContainer />
        </div>
      </section>

      <TextShpereData />
    </section>
  );
};

export default Skills;
