import Cursor from './Components/Cursor';
import LuffyText from './Components/LuffyText';
import Skills from './Layouts/Skills';
import Footer from './Layouts/Footer';
import Work from './Layouts/Work';

import './App.css';
import About from './Layouts/About';

function App() {
  return (
    <div className="App" style={{ color: '#fff' }}>
      <About />
      <Cursor />
      <Skills />
      <Work />
      <LuffyText />
      <Footer />
    </div>
  );
}

export default App;
