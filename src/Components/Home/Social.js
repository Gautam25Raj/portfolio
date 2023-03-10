import './Social.css';

import github from './../../Assests/SVG/social/github.svg';
import insta from './../../Assests/SVG/social/instagram.svg';
import linkedin from './../../Assests/SVG/social/linkedin.svg';
import stackoverflow from './../../Assests/SVG/social/stackoverflow.svg';

const Social = () => {
  return (
    <section className="social-container">
      <ul className="social-links back-shadow">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Gautam25Raj"
        >
          <li aria-label="link" className="social-link">
            <img src={github} alt="github icon" className="social-icon" />
          </li>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://stackoverflow.com/users/13280732/nooberboy"
        >
          <li aria-label="link" className="social-link">
            <img
              src={stackoverflow}
              alt="stackoverflow icon"
              className="social-icon"
            />
          </li>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/nooberboy/"
        >
          <li aria-label="link" className="social-link">
            <img src={insta} alt="instagram icon" className="social-icon" />
          </li>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/gautam-raj-3932671a9/"
        >
          <li aria-label="link" className="social-link">
            <img src={linkedin} alt="linkedin icon" className="social-icon" />
          </li>
        </a>
      </ul>

      <p className="follow">FOLLOW ME</p>
    </section>
  );
};

export default Social;
