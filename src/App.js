import { Navbar } from "./components/Navbar";
import { Intro } from './components/Intro/intro';
// import { Skill } from './components/skills/skill'; // Update 'Skills' to 'Skill'
import {About} from './components/about/about'
import Timeline from "./components/timeline/Timeline";
import './index.css'
import Portfolio from "./components/Projects/Portfolio";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Intro />
      <About/>
      <Timeline/>
      <Portfolio/>
      <Footer/>
       
    </div>
  );
}

export default App;
