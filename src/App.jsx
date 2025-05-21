import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { useState } from "react";
import { Experience } from "./components/Experience";
import { Projects } from "./components/sub/Projects";
import { Footer } from "./components/Footer";
function App() {
  const [height, setHeight] = useState(null);
  function calculateNavHeight(ref) {
    setHeight(`${ref.current.getBoundingClientRect().height}px`);
    console.log(height);
  }
  console.log("nav height", height);
  return (
    <>
      <Navbar calculateHeight={calculateNavHeight}></Navbar>
      <section className="align-element px-0">
        <Hero height={height}></Hero>
        <Projects></Projects>
        <Experience></Experience>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
