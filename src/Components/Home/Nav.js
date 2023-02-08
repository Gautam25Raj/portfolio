import './Nav.css';

import cross from './../../Assests/SVG/cross.svg';

const Nav = () => {
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

      <button className="nav-btn absolute-center">
        <img src={cross} alt="" />
      </button>
    </nav>
  );
};

export default Nav;
