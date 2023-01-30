import WorkHeading from '../Components/Work/WorkHeading';
import Projects from '../Components/Work/Projects';

import './Work.css';

const Work = () => {
  return (
    <section className="work">
      <WorkHeading />
      <span
        className="element span-block "
        style={{ transform: 'translateX(0)' }}
      >
        &lt;section&gt;
      </span>
      <Projects />
      <span className="work-ele span-block ">&lt;/section&gt;</span>
    </section>
  );
};

export default Work;
