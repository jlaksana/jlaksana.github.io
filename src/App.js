import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import HeroLanding from "./components/HeroLanding";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./css/App.css";
import theme from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
          <HeroLanding />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
