import ProjectImage from './ProjectImage';
import ProjectDetails from './ProjectDetails';
import ProjectNumber from './ProjectNumber';

import './Projects.css';

import happen from './../../Assests/Images/happen.png';
import corous from './../../Assests/Images/corous.png';
import covid from './../../Assests/Images/covid-tracker.png';
import natours from './../../Assests/Images/natours.png';

const Project = () => {
  const projectsData = [
    {
      capital: 'H',
      title: 'appen Wedding',
      role: 'Design/Development',
      release: '2022.12',
      visit: 'https://happenwedding.com/',
      img: happen,
      key: 'happen',
    },
    {
      capital: 'C',
      title: 'orous',
      role: 'Design/Development',
      release: '2022.03',
      visit: 'https://github.com/Gautam25Raj/Corous',
      img: corous,
      key: 'corous',
    },
    {
      capital: 'C',
      title: 'ovid Tracker',
      role: 'Development',
      release: '2022.03',
      visit: 'https://github.com/Gautam25Raj/Covid-Tracker',
      img: covid,
      key: 'covid',
    },
    {
      capital: 'N',
      title: 'atours',
      role: 'Development',
      release: '2022.07',
      visit: 'https://github.com/Gautam25Raj/Natours',
      img: natours,
      key: 'natours',
    },
  ];

  return (
    <section className="projects">
      {projectsData.map((projectData, i) => {
        return (
          <section key={projectData.key} className="grid">
            <ProjectDetails
              capital={projectData.capital}
              title={projectData.title}
              role={projectData.role}
              release={projectData.release}
              visit={projectData.visit}
              evenOdd={i % 2 === 0 ? 'even' : 'odd'}
            />

            <ProjectNumber
              number={i + 1}
              evenOdd={i % 2 === 0 ? 'even' : 'odd'}
              length={projectsData.length}
            />

            <ProjectImage
              img={projectData.img}
              evenOdd={i % 2 === 0 ? 'even' : 'odd'}
              visit={projectData.visit}
            />
          </section>
        );
      })}
    </section>
  );
};

export default Project;
