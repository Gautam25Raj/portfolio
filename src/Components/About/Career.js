import Elements from './../Elements';

import './Career.css';

const Career = (props) => {
  return (
    <section className="career">
      <Elements name="h3" />
      <h3 className="career-heading">Career</h3>
      <Elements name="/h3" />

      <div className="career-list-container justify-between">
        <ul>
          {props.years.map((year) => (
            <li className="career-list " key={year}>
              <p className="career-year paragraph ">{year}</p>
            </li>
          ))}
        </ul>
        <ul style={{ maxWidth: '415px' }}>
          {props.events.map((event, i) => (
            <li className="career-list " key={'event-' + i}>
              <p className="career-event paragraph ">{event}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Career;
