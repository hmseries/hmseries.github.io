import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Video from "./components/Video/Video";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="app">
      <Navbar />
      {/* <header className={scrollPosition > 729 ? "scrolled" : ""}>
      </header> */}
      <div id="home" className="home">
        <Carousel />
      </div>
      <Video />
      <About />
      <Contact />
    </div>
  );
}

export default App;
