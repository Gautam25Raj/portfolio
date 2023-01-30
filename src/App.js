import LuffyText from './Components/LuffyText';
import Skills from './Layouts/Skills';
import Footer from './Layouts/Footer';
import Work from './Layouts/Work';

import './App.css';
import Cursor from './Components/Cursor';

function App() {
  return (
    <div className="App">
      <Cursor />
      <Skills />
      <Work />
      <LuffyText />
      <Footer />
    </div>
  );
}

export default App;
