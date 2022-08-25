// Component Imports
import Navbar from "./components/Navbar/Navbar.js";
import Intro from "./components/Intro/Intro.js";
import Skills from "./components/Skills/Skills.js";
import Projects from "./components/Projects/Projects.js";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;