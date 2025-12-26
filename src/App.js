import { NavBar } from './components/NavBar';
import { Carousel } from './components/Carousel';
import { Hero_Section } from './components/Hero-Section';
import { Cards } from './components/Cards';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="hero-section">
        <Hero_Section />
      </div>
      <Carousel />
      <div>
        <h1 className="headers">/Projects</h1>
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <h1 className="headers-about">/About</h1>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
