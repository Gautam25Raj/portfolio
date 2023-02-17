import Cursors from './Components/Cursors';
import Header from './Layouts/Header';
import About from './Layouts/About';
import Skills from './Layouts/Skills';
import Work from './Layouts/Work';
import LuffyText from './Components/LuffyText';
import Footer from './Layouts/Footer';

import './App.css';

function App() {
  return (
    <div className="App" style={{ color: '#fff' }}>
      <Cursors />
      <Header />
      <About />
      <Skills />
      <Work />
      <LuffyText />
      <Footer />
    </div>
  );
}

export default App;
