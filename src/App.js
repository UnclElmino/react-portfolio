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
      <div id='home'>
        <NavBar />
      </div>
      <div className="hero-section">
        <Hero_Section />
      </div>
      <Carousel />
      <div id='projects'>
        <h1 className="headers">/Projects</h1>
      </div>
      <div>
        <Cards />
      </div>
      <div id='about'>
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
