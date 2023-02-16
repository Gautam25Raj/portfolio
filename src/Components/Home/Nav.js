import './Nav.css';

import cross from './../../Assests/SVG/cross.svg';

const Nav = () => {
  const navOpenClose = () => {
    document.querySelector('.nav').classList.toggle('close');
    // document.querySelector('.nav').style.width = 'auto';
  };

  return (
    <nav className="nav center back-shadow height-border">
      <ul className="nav-bar">
        <li className="nav-list">
          <a href="#">About</a>
        </li>

        <li className="nav-list">
          <a href="#">Skills</a>
        </li>

        <li className="nav-list">
          <a href="#">Project</a>
        </li>

        <li className="nav-list">
          <a href="#">Contact</a>
        </li>
      </ul>

      <button aria-label="close" onClick={navOpenClose} className="nav-btn">
        <img src={cross} alt="" />
      </button>
    </nav>
  );
};

export default Nav;
