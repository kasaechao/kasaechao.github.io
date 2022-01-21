import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
// import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";

function App() {
  return (
      <div>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Experiences />
        <Contact />
      </div>
  );
}

export default App;