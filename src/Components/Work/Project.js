import ProjectImage from './ProjectImage';
import Details from './Details';

import './Project.css';

import happen from './../../Assests/Images/happen.png';
import corous from './../../Assests/Images/corous.png';
import covid from './../../Assests/Images/covid-tracker.png';
import natours from './../../Assests/Images/natours.png';

const Project = () => {
  const projectsData = [
    {
      title: 'Happen Wedding',
      role: 'Design/Development',
      release: '2022.12',
      visit: 'https://happenwedding.com/',
      img: happen,
    },
    {
      title: 'Corous',
      role: 'Design/Development',
      release: '2022.03',
      visit: 'https://github.com/Gautam25Raj/Corous',
      img: corous,
    },
    {
      title: 'Covid Tracker',
      role: 'Development',
      release: '2022.03',
      visit: 'https://github.com/Gautam25Raj/Covid-Tracker',
      img: covid,
    },
    {
      title: 'Natours',
      role: 'Development',
      release: '2022.07',
      visit: 'https://github.com/Gautam25Raj/Natours',
      img: natours,
    },
  ];

  // projectsData.map((projectData) => (
  //   <section className="">
  //     <ProjectImage img={projectData.img} />

  //     <Details
  //       role={projectData.role}
  //       title={projectData.title}
  //       release={projectData.release}
  //       visit={projectData.visit}
  //     />
  //   </section>
  // ));

  return (
    <section className="grid">
      <ProjectImage img={projectsData[0].img} />

      <Details
        role={projectsData[0].role}
        title={projectsData[0].title}
        release={projectsData[0].release}
        visit={projectsData[0].visit}
      />
    </section>
  );
};

export default Project;
