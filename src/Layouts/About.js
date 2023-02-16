import AboutHeading from '../Components/About/AboutHeading';
import Career from '../Components/About/Career';
import Me from '../Components/About/Me';

import './About.css';

import airport from './../Assests/SVG/airport.svg';
import upper from './../Assests/SVG/about-upper.svg';
import lower from './../Assests/SVG/about-lower.svg';

const About = () => {
  // const career = [
  //   { year: 2001, event: 'Born in Patna' },
  //   { year: 2017, event: 'Matriculation' },
  //   { year: 2019, event: 'Intermediate' },
  //   { year: '2019-2023', event: 'Bachelor in Computer Science Engineering' },
  // ];

  const years = [2001, 2017, 2019, '2019 - 23'];
  const events = [
    'Born in Patna',
    'Matriculation',
    'Intermediate',
    'Bachelor in Computer Science Engineering',
  ];

  return (
    <>
      <section className="about">
        <img src={upper} alt="" style={{ transform: 'translateY(-10px)' }} />

        <section className="grid">
          <AboutHeading />

          <span
            className="element span-block no-select"
            style={{ gridColumnStart: 2, gridColumnEnd: 12 }}
          >
            &lt;section&gt;
          </span>
          <Me />
          <Career years={years} events={events} />

          <div className="airport">
            <img src={airport} alt="" />
          </div>

          <span
            className="element span-block no-select"
            style={{ gridColumnStart: 2, gridColumnEnd: 12 }}
          >
            &lt;/section&gt;
          </span>
        </section>

        <img src={lower} alt="" style={{ transform: 'translateY(10px)' }} />
      </section>
    </>
  );
};

export default About;
