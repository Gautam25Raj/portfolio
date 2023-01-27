import './SkillsExperience.css';

const SkillsExperience = () => {
  return (
    <section className="skills-details">
      <div className="skills-heading">
        <span className="element span-block">&lt;h1&gt;</span>

        <h2 className="heading-size heading-color">
          <span className="on-hover">S</span>
          kills & <br />
          <span className="on-hover">E</span>
          xperience
        </h2>

        <span className="element span-block">&lt;/h1&gt;</span>
      </div>

      <div>
        <span className="element span-block">&lt;p&gt;</span>

        <p className="paragraph">
          Software Developer with Quality-focused, Creative and technical MERN
          Stack Developer with UI/UX Juice to enhance my skillset.
          <br />
          <br />
          I can create successful responsive websites that are fast, easy to
          use, and built with best practices. The main area of my expertise is
          front-end development, HTML, CSS, JS, building small and medium web
          apps.
          <br />
          <br />
          I'm also 4 ⭐ HackerRank coder specializing in Java, 5 ⭐ in Problem
          Solving and Creative problem solver with demonstrated ability to work
          on multiple projects simultaneously.
          <br />
          <br />
          Visit my{' '}
          <a
            href="https://www.linkedin.com/in/gautam-raj-3932671a9/"
            className="on-hover linkedin"
          >
            LinkedIn
          </a>{' '}
          profile for more details.
        </p>

        <span className="element span-block">&lt;/p&gt;</span>
      </div>
    </section>
  );
};

export default SkillsExperience;