import "./css/App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroLanding from "./components/HeroLanding";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <HeroLanding />
        <About />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
