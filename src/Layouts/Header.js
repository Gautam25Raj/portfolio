import Logo from '../Components/Home/Logo';
import Nav from '../Components/Home/Nav';
import Social from '../Components/Home/Social';

import './Header.css';

const Header = () => {
  return (
    <header>
      <section className="navigation">
        <Logo />
        <Nav />
        <Social />
      </section>
    </header>
  );
};

export default Header;
