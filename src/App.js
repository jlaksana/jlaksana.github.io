import "./css/App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <About />
        <Projects />
      </div>
    </BrowserRouter>
  );
}

export default App;
