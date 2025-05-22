import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { useState } from "react";
import { Experience } from "./components/Experience";
import { Projects } from "./components/sub/Projects";
import { Footer } from "./components/Footer";
import { About } from "./components/sub/About";
function App() {
  const [height, setHeight] = useState(null);
  function calculateNavHeight(ref) {
    setHeight(`${ref.current.getBoundingClientRect().height}px`);
    console.log(height);
  }
  console.log("nav height", height);
  return (
    <>
      <section
        aria-label="hero"
        className="min-h-screen bg-cover bg-center "
        style={{ backgroundImage: "url('/hero.webp')" }}
      >
        <Navbar calculateHeight={calculateNavHeight}></Navbar>
        <Hero height={height}></Hero>
      </section>

      <Projects></Projects>
      <About></About>
      <Experience></Experience>

      <Footer></Footer>
    </>
  );
}

export default App;
