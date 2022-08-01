import "./css/App.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Navbar from "./components/Navbar";
import HeroLanding from "./components/HeroLanding";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
